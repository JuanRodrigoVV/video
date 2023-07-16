import React from 'react'

function CardComponent({title, text}) {
  return (
    <div className='card'>
        <div className='cardInside'>
            <h1 className='cardTitle'>{title}</h1>
            <p className='cardText'>{text}</p>
        </div>
    </div>
  )
}

export default CardComponent