import React from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { useState } from 'react'

function Chat() {
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
          message: "Hello There",
          sender: "ChatGPT"  
        }
    ])

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
            content: "Explain everything as is a video editing services. This service edit videos for youtube, livestreams, youtube shorts and all kind of video ads. Thre pricings are: Creator: 3 videos for 100usd, Influencer: 6 videos 180usd, Top Influencer: 9 videos per 250usd. The response should not be longer than 100words"
        }


        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
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
    <div>
        <div style={{ position: "relative", height: "800px", width: "700px"}}>
            <MainContainer>
                <ChatContainer>
                    <MessageList typingIndicator={typing ? <TypingIndicator content="WonderShare Bot is Typing"/> : null }>
                        {messages.map((message, i) => {
                            return <Message key={i} model={message}></Message>
                        })}
                    </MessageList>
                    <MessageInput placeholder='Type your message' onSend={handleSend}/>
                </ChatContainer>
            </MainContainer>
        </div>
    </div>
  )
}

export default Chat