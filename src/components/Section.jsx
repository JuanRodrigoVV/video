import React from 'react'
import { BsPhone, BsTabletLandscape} from 'react-icons/bs';
import { GrPersonalComputer} from 'react-icons/gr';
import { useState } from 'react';


export default function Section1() {
  
  const links = [
    "https://filmora.wondershare.com/assets/video/filmora12/homepage/homepage-molie.mp4",
    "https://filmora.wondershare.com/assets/video/filmora12/homepage/homepage-ipad.mp4",
    "https://filmora.wondershare.com/assets/video/filmora12/homepage/homepage-desktop.mp4"
    ]

  let [link, setLink] = useState("https://filmora.wondershare.com/assets/video/filmora12/homepage/homepage-ipad.mp4")

    
  return (
    <div className='section1'>
        <div className='mainCardSection1'>
           
            {/* phone pc tablet */}
                <div className='buttons'>
                    <div className='buttonContainer' onClick={() => setLink(links[0])}>
                        <BsPhone className='icons'/>
                        <p>Phone</p>
                    </div>
                    <div className='buttonContainer' onClick={() => setLink(links[1])}>
                        <BsTabletLandscape className='icons'/>
                        <p>Pad</p>
                    </div>
                    <div className='buttonContainer' onClick={() => setLink(links[2])}>
                        <GrPersonalComputer className='icons'/>
                        <p>Computer</p>
                    </div>
                </div>
            {/* phone pc tablet */}
            <div className='videoTextSection1'>
                {/* video div */}
                    <div className='cardVideo'>
                      <video autoPlay={true} loop={true} muted className='video' src={link}></video>
                    </div>
                {/* video div */}
                {/* text div */}
                    <div className='textDiv'>
                        <h1 className='titleDiv'>Creativity in Minds, Filmora at Hands</h1>
                        <p>Add the finishing touch to your masterpiece and share to Filmora workspace for co-creation.</p>
                        <button>CONTACT US</button>

                    </div>
                {/* text div */}
            </div>
            
        </div>
    </div>
  )
}
