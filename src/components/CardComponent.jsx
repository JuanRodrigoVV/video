import React from 'react'
import { AiOutlineUser,  AiOutlineYoutube } from 'react-icons/ai';
import { GiWorld } from 'react-icons/gi';




function CardComponent({title, text, icons}) {
  
  
  return (
    <div className='card'>
        <div className='cardInside'>
          {/* icons conditional */}
            <div className="iconsDiv">
            {icons === 'users' ? (
              <AiOutlineUser className="cardIcons" />
              ) : icons === 'world' ? (
                <GiWorld className="cardIcons" />
                ) : icons === 'clients' ? (
                  <AiOutlineYoutube className="cardIcons" />
                  ) : 
                  (
                    <AiOutlineYoutube className="cardIcons" />
                    )}
              </div>
           {/* icons conditional */}
            <h1 className='cardTitle'>{title}</h1>
            <p className='cardText'>{text}</p>
        </div>
    </div>
  )
}

export default CardComponent