import React from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { useState, useEffect } from 'react'

function Chat({closeChat}) {
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
          message: "Hello! I am Leatnik Bot, and I'm here to guide you through the process of exploring our video collection. If you prefer to chat with a human, please fill your information in the contact section, and one of our representatives will get in touch with you shortly. Feel free to ask me anything about our videos or any assistance you may need. Let's get started! 🎬🤖",
          sender: "ChatGPT"  
        }
    ])


//   useEffect(() => {
//     // Restaurar mensajes del localStorage al cargar el componente
//     const storedMessages = localStorage.getItem('chatMessages');
//     if (storedMessages) {
//       setMessages([
        
//         JSON.parse(storedMessages)]);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('chatMessages', JSON.stringify(messages));
//   }, [messages]);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setTyping(true)
        //processing  message
        await processMesageToChatGPT(newMessages);
        //processing  message
        
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
            content: "Explain everything as is a video editing services. This service edit videos for youtube, livestreams, youtube shorts and all kind of video ads. Thre pricings are: Creator: 3 videos for 100usd, Influencer: 6 videos 180usd, Top Influencer: 9 videos per 250usd. The response should not be longer than 100words.  If you receive any question that is not about the service or how to get in contact with a human always, without exception answer: If you prefer to chat with a human, please fill your information in the contact section, and one of our representatives will get in touch with you shortly. I repeat, do not questions unrelated with the video service"
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




    return (
  
        <div className='chatContainer'>
            {/* <button className='chatButton' onClick={closeChat}>Close</button> */}
            <MainContainer className='mainContainer'>
                <ChatContainer className='chatContainer2'>
                    <MessageList  typingIndicator={typing ? <TypingIndicator content="WonderShare Bot is Typing"/> : null }>
                        {messages.map((message, i) => {
                            return <Message  key={i} model={message}></Message>
                        })}
                    </MessageList>
                    <MessageInput className='messageInput' placeholder='Type your message' onSend={handleSend}/>
                </ChatContainer>
            </MainContainer>
        </div>
   
  )
}

export default Chat