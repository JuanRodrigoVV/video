import React from 'react'
import CardComponent from './CardComponent'
import Section1 from './Section'

export default function Home() {
  return (
    <div className='home'>
      {/* div del banner */}
      <div className='bannerdiv'>
        <video autoPlay={true} loop={true} muted className='banner' width={"1472px"} src="https://filmora.wondershare.com/assets/video/homepage/filmora-banner-video.mp4"></video>
      </div>
        {/* div de las cards */}
        <div className='cardDiv'>
          <div className='cardDiv2'>
            <CardComponent title={'+100'} text={'Clients'}/>
            <CardComponent title={'+5'} text={'Countries'}/>
            <CardComponent title={'+200'} text={'Jobs done'}/>
            <CardComponent title={'+150'} text={'Live Streams'}/>
          </div>
        </div>
        {/* div de las cards */}
        {/* Section 1 */}
          <Section1/>
        {/* Section 1 */}

    </div>
  )
}
