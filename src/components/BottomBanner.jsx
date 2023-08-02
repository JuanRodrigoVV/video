import React from 'react'

export default function BottomBanner() {
  return (
    <div className='bottomBannerDiv'>
      <div className='bbImgContainer'>
        <img className='bottomBannerImg' src="https://res.cloudinary.com/dtdjv6zdl/image/upload/v1690995207/Untitled-1_jnryiw.png" alt="" />
      </div>
       <h1 className='bottomTitle'>
       Connect with one of our representatives and kickstart the enhancement of your video content today.
        </h1>
        <a href="/contact" class="buttonHref">
         CONTACT US
        </a>
       
    </div>
  )
}

