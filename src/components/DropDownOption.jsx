import React from 'react'
import {BiDownArrow} from 'react-icons/bi'
import { useState } from 'react'


export default function DropDownOption({options}) {
  const [arrow, setArrow] = useState(false);


  return (
    <div className='dropDownOption'>
    <ul className='ulFooter'>
        <div className='titleArrow'>
             <h1 className='titleDropDown'>Products</h1>
             <BiDownArrow onClick={() => setArrow(!arrow)} className='dropDownIcon'/>
        </div>
        {arrow ? <segment className='segment'>
            {options.map((option, index) => (
              <li key={index}>
                <a className='footerHref' href={option.href}>{option.title}</a>
              </li>
            ))}
          </ segment> : <>
        </>}
    
    </ul>
</div>
  )
}
