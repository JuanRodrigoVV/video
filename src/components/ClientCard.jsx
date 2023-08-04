import React from 'react'

export default function ClientCard({text, name, position, image}) {
  return (
   
        <div className='card2'>
          <div className="divTextClient">
            <p className='cardText2'>{text}</p>
          </div>
        
        <div className='cardImageText'>
          <div className='imageCard'>
            <img className='cardImage' src={image} alt="" />  
          </div>
          <div>

          <h1 className='clientCardName'>{name}</h1>
          <p className='clientCardTitle'>{position}</p>
          </div>
     
        </div>
   
    </div>
  )
}
