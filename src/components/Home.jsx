
import React, { useState } from 'react';
import BottomBanner from './BottomBanner'
import CardComponent from './CardComponent'
import Clients from './Clients'
import Footer from './Footer'
import Section1 from './Section'
import Section2 from './Section2'



export default function Home() {
  const [openChat, setOpenChat] = useState(false);

  const handleChat = () => {
    return setOpenChat(!openChat);
     
  };

  return (
    <div className='home'>
      {/* div del banner */}
      <div className='bannerdiv'>
        <video autoPlay={true} loop={true} muted className='banner'  src="https://res.cloudinary.com/dtdjv6zdl/video/upload/v1690914770/Banner2_cy6f65.mp4"></video>
      </div>
        {/* div de las cards */}
        <div className='cardDiv'>
          <div className='cardDiv2'>
            <CardComponent title={'+50'} text={'Clients'} icons='users'/>
            <CardComponent title={'+5'} text={'Countries'} icons='world'/>
            <CardComponent title={'+200'} text={'Jobs done'}/>
            <CardComponent title={'+40'} text={'Live Streams'}/>
          </div>
        </div>
        {/* div de las cards */}
        {/* Section 1 */}
          <Section1/>
        {/* Section 1 */}
        {/* title and button */}
        <div className='titleandbutton'>
          <h1 className='hometitle'>Join today and get 30% disccount</h1>
          <div className='subtitleContainer'>
          <p className='subtitle'>We bring to you a seasoned video editing service, <span className='spanAbout'>backed by more than 8 years of hands-on experience.</span> When you choose us, you're placing your valuable videos in the capable hands of dedicated professionals who understand the art and science of crafting compelling visual narratives. <span className='spanAbout'>Captivate Your Audience: Boost User Traffic with Engaging Multimedia Editing</span></p>
          </div>
          <a href="/contact" class="buttonHref">
                             Unlock 30% off
                            </a>
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
        {/* {openChat ? <Chat closeChat={handleChat} /> : <button className='chatButton1' onClick={handleChat}><BsChatDots className='chatIcon'/>  Chat</button>} */}

        </div>
        {/* chatbot */}
        


    </div>
  )
}
