
import React, { useState } from 'react';
import BottomBanner from './BottomBanner'
import CardComponent from './CardComponent'
import Clients from './Clients'
import Footer from './Footer'
import Section1 from './Section'
import Section2 from './Section2'
import Chat from './Chat'
import { BsChatDots } from 'react-icons/bs';


export default function Home() {
  const [openChat, setOpenChat] = useState(false);

  const handleChat = () => {
    return setOpenChat(!openChat);
     
  };

  return (
    <div className='home'>
      {/* div del banner */}
      <div className='bannerdiv'>
        <video autoPlay={true} loop={true} muted className='banner' width={"1472px"} src="https://filmora.wondershare.com/assets/video/homepage/filmora-banner-video.mp4"></video>
      </div>
        {/* div de las cards */}
        <div className='cardDiv'>
          <div className='cardDiv2'>
            <CardComponent title={'+100'} text={'Clients'} icons='users'/>
            <CardComponent title={'+5'} text={'Countries'} icons='world'/>
            <CardComponent title={'+200'} text={'Jobs done'}/>
            <CardComponent title={'+150'} text={'Live Streams'}/>
          </div>
        </div>
        {/* div de las cards */}
        {/* Section 1 */}
          <Section1/>
        {/* Section 1 */}
        {/* title and button */}
        <div className='titleandbutton'>
          <h1 className='hometitle'>Join today and get 30% disccount</h1>
          <p className='subtitle'>Captivate Your Audience: Boost User Traffic with Engaging Multimedia Editing</p>
          <button className='button'>Unlock 30% off</button>
        </div>
        {/* title and button */}
        {/* section2  */}
        <Section2/>
        {/* section2  */}
        {/* clients experience */}
        <Clients/>
        {/* clients experience */}
        {/* bottom banner */}
        <BottomBanner/>
        {/* bottom banner */}
        {/* footer */}
        <Footer/>
        {/* footer */}
        {/* chatbot */}
        <div className='chat'>
        {openChat ? <Chat closeChat={handleChat} /> : <button className='chatButton1' onClick={handleChat}><BsChatDots className='chatIcon'/>  Chat</button>}

        </div>
        {/* chatbot */}
        


    </div>
  )
}
