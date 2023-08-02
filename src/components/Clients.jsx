import React from 'react'
import ClientCard from './ClientCard'

export default function Clients() {
  return (
    <div className='clientSection'>
        <div>
            <h1 className='hometitle'>See What Our Users Have to Say</h1>
            <div className='iconsDiv'>
                <div className='iconsCard'>

                <img src="https://images.wondershare.com/filmora/filmora12/product/user-g2-crowd.png" alt="" height={"50px"} />
               <div >
                 <h1 className='clientTitle'>BeInCrypto</h1>
                 <p className='clientText'>They are the best of the best</p>
               </div>
                </div>
                <div className='iconsCard'>

                <img src="https://images.wondershare.com/filmora/filmora12/product/user-shorty-awards.png" alt="" height={"50px"} />
                <div>
                 <h1 className='clientTitle'>BeInCrypto</h1>
                 <p className='clientText'>A League Above in Professionalism</p>
               </div>
                </div>
                <div className='iconsCard'>

                <img src="https://images.wondershare.com/filmora/filmora12/product/user-getapp.png" alt="" height={"50px"} />
                <div >
                 <h1 className='clientTitle'>BeInCrypto</h1>
                 <p className='clientText'>Masters in Crafting Video Excellence</p>
               </div>
                </div>
            </div>
        </div>
        <div className='clientCardDiv2'>
        <ClientCard text="Our partnership with Media Morphe has been truly transformative for our brand. Their unparalleled video editing expertise has breathed new life into our content, propelling it to an entirely new echelon of quality and engagement. It's not an exaggeration to say that their meticulous touch has redefined how we connect with our audience. "/>
        <ClientCard text="Embarking on a creative journey with Media Morphe has been an unequivocal game-changer for our brand's video content.  The immediate result? A surge in our social media followers, a testament to Media Morphe's ability to craft videos that resonate and connect on a profound level. Yet, the resonance goes beyond aesthetics. "/>
        <ClientCard text="If ever there was a turning point in our content journey, it was the day we collaborated with Media Morphe. Their unrivaled mastery in video editing has reshaped how our brand interacts with the digital world. Our videos, once static, now carry an electrifying vitality that captivates and resonates with our audience on a profound level."/>
        </div>

    </div>
  )
}
