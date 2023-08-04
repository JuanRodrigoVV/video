import React from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { useState} from 'react'
import {BsSendFill} from 'react-icons/bs'


function Chat({closeChat}) {

    const [inputValue, setInputValue] = useState('');
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
          message: "Hello! I am Media Morphhe Bot, and I'm here to guide you through the process of exploring our video collection. If you prefer to chat with a human, please fill your information in the contact section, and one of our representatives will get in touch with you shortly. Feel free to ask me anything about our videos or any assistance you may need. Let's get started! 🎬🤖",
          sender: "ChatGPT"  
        }
    ])



    const handleSend = async () => {
        const newMessage = {
            message: inputValue,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setTyping(true)
        //processing  message
        await processMesageToChatGPT(newMessages);
        //processing  message
        setInputValue('')

        
    } 

   const processMesageToChatGPT = async (chatMessages) => {
        
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if(messageObject.sender === "ChatGPT") {
                role="assistant"
            } else {
                role="user"
            }
            return {role: role, content: messageObject.message}
        });

        const systemMessage = {
            role: "system",
            content: "You must answer questions related to this information, it is for a video editing service website. We provide a service of video editing. We edit all kind of videos, tutorial, instagram ads, facebook ads, youtube videoblogs, educational content, web3 content. We edit in all formats widescreen and vertical. We are experts with more than 8 years of experience in the industry, we have work for some major media platforms.  The team is compose by an expert filmaker, a copywriter, web developer, social media and communication expert. You can check some of our jobs in the about us section. In case you need it for your product, we also provide service of web development and copywriting. The prices: The prices changes acordding to many aspects of your product needs. The material script and assets you provide to us and the complexity of the video you need. Please get fill your info in the contact section and we will get in touch with you. Do not answer questions unrelated to the service. "
        }


        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages,
                systemMessage,
            ]
        }

        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody) 
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                console.log(data.choices[0].message.content);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                      message: data.choices[0].message.content,
                      sender: "ChatGPT"
                    }
                  ]);
                setTyping(false);
            })
            .catch((error) => {
                console.error(error);
            });
        
    };

    const handleButtonClick = () => {
        // Display the input value in an alert
        alert(inputValue);
      };


    return (
        <div className='pageContainer'>
            <div className='chatContainer'>
                {/* <button className='chatButton' onClick={closeChat}>Close</button> */}
                <MainContainer className='mainContainer'>
                    <ChatContainer className='chatContainer2'>
                        <MessageList  typingIndicator={typing ? <TypingIndicator content="Media Morphe Bot is Typing"/> : null }>
                            {messages.map((message, i) => {
                                return <Message  key={i} model={message}></Message>
                            })}
                        </MessageList>
                        {/* <MessageInput className='messageInput' placeholder='Type your message' onSend={handleSend}/> */}
                    </ChatContainer>
                </MainContainer>
                <div className='inputChatDiv'>
                        <input className='input' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <BsSendFill className='chatSend' onClick={handleSend}/>
                </div>

            </div>
        </div>
   
  )
}

export default Chat