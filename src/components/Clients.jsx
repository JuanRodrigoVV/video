import React from 'react'
import ClientCard from './ClientCard'

export default function Clients() {
  return (
    <div className='clientSection'>
        <div>
            <h1 className='hometitle'>See What Our Users Have to Say</h1>
            <div className='iconsDiv'>
                <div className='iconsCard'>

                <img src="https://res.cloudinary.com/dtdjv6zdl/image/upload/v1691165588/Virtual2_ubiaki.webp" className='clientImage' alt="" height={"50px"} />
               <div >
                 <h1 className='clientTitle'>Virtual Karma</h1>
                 <p className='clientText'>They are the best of the best</p>
               </div>
                </div>
                <div className='iconsCard'>

                <img src="https://res.cloudinary.com/dtdjv6zdl/image/upload/v1691165588/Rural_op8rpt.webp" alt="" className='clientImage' height={"50px"} />
                <div>
                 <h1 className='clientTitle'>A.S.R.C</h1>
                 <p className='clientText'>A League Above in Professionalism</p>
               </div>
                </div>
                <div className='iconsCard'>

                <img src="https://res.cloudinary.com/dtdjv6zdl/image/upload/v1691165588/Desmadre_ak4tbi.webp" alt="" className='clientImage' height={"50px"} />
                <div >
                 <h1 className='clientTitle'>DSMDR</h1>
                 <p className='clientText'>Masters in Crafting Video Excellence</p>
               </div>
                </div>
            </div>
        </div>
        <div className='clientCardDiv2'>
        <ClientCard image='https://res.cloudinary.com/dtdjv6zdl/image/upload/v1691165588/Virtual2_ubiaki.webp' name='Virtual Karma' position="Fashion Online Media" text="Our partnership with Media Morphe has been truly transformative for our brand. Their unparalleled video editing expertise has breathed new life into our content, propelling it to an entirely new echelon of quality and engagement. It's not an exaggeration to say that their meticulous touch has redefined how we connect with our audience. "/>
        <ClientCard image="https://res.cloudinary.com/dtdjv6zdl/image/upload/v1691165588/Rural_op8rpt.webp" name="A.S.R.C." position="Rural Products E-commerce" text="Embarking on a creative journey with Media Morphe has been an unequivocal game-changer for our brand's video content.  The immediate result? A surge in our social media followers, a testament to Media Morphe's ability to craft videos that resonate and connect on a profound level. Yet, the resonance goes beyond aesthetics. A League Above in Professionalism"/>
        <ClientCard image="https://res.cloudinary.com/dtdjv6zdl/image/upload/v1691165588/Desmadre_ak4tbi.webp"  name="DSMDR 404" position="Digital Media" text="If ever there was a turning point in our content journey, it was the day we collaborated with Media Morphe. Their unrivaled mastery in video editing has reshaped how our brand interacts with the digital world. Our videos, once static, now carry an electrifying vitality that captivates and resonates with our audience on a profound level."/>
        </div>

    </div>
  )
}
