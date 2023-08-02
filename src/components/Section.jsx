import React from 'react'
import { BsPhone, BsTabletLandscape} from 'react-icons/bs';
import { GrPersonalComputer} from 'react-icons/gr';
import { useState } from 'react';


export default function Section1() {
  
  const links = [
    "https://res.cloudinary.com/dtdjv6zdl/video/upload/v1690918589/Phone_npi0b7.mp4",
    "https://res.cloudinary.com/dtdjv6zdl/video/upload/v1690919409/Tablet_tubptv.mp4",
    "https://res.cloudinary.com/dtdjv6zdl/video/upload/v1690918684/Computer_wmi2ji.mp4"
    ]

  let [link, setLink] = useState("https://res.cloudinary.com/dtdjv6zdl/video/upload/v1690919409/Tablet_tubptv.mp4")

    
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
                        <h1 className='titleDiv'>Unlock Your Video Potential</h1>
                        <p>Our Expert Editors Optimize Your Content for Every Social Media Platform.</p>
                        <a href="/contact" class="buttonHref">
                             CONTACT US
                            </a>

                    </div>
                {/* text div */}
            </div>
            
        </div>
    </div>
  )
}
