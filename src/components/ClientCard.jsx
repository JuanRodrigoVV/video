import React from 'react'

export default function ClientCard({text}) {
  return (
   
        <div className='card2'>
          <p className='cardText2'>{text}</p>
        
        <div className='cardImageText'>
          <div className='imageCard'>
            <img className='cardImage' src="https://images.wondershare.com/filmora/Contributor/jacky-nguyen-profile.jpg" alt="" />  
          </div>
        <div>
          <h1 className='clientCardName'>John Doe</h1>
          <p className='clientCardTitle'>Filmaker</p>
        </div>
        </div>
   
    </div>
  )
}
