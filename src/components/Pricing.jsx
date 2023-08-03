import React from 'react'
import {TiTick} from 'react-icons/ti'
import {FaUsersCog} from 'react-icons/fa'
import {MdHighQuality} from 'react-icons/md'
import {FaPaintBrush} from 'react-icons/fa'
import  Footer  from './Footer'
import { FaqWithBg } from './FAQs'
import { UserContact } from './UserContact'



export default function Pricing() {
  return (
    <div className='pricing'>
      <h1 className='hometitle'>Pick the best plan for you</h1>
      <div className='pricingDiv'>

        {/* pricing 1 */}
        <div className='card'>
          <h1 className='priceTitle'>Personal</h1> 
          {/* <h2 className='oldPrice'>US$146.95</h2>
          <h1 className='newPrice'>$67.99</h1> */}
          <button className='button21'><a href="/contact">Get Your Budget</a></button>
          {/* <button className='button2'><a href="https://www.google.com">Contact</a></button> */}
          <div className='pricingTextDiv'>
            <p class="pricingP"><TiTick className='tick'/>Video-call with one of our representatives, defining Project Key Points</p>
            <p class="pricingP"><TiTick className='tick'/>One video corrections per project</p>
            <p class="pricingP"><TiTick className='tick'/>One format per project (Widescreen or Vertical)</p>
          
       
          </div> 
        </div>
        {/* pricing 1 */}

        {/* pricing 3 */}
        <div className='card'>
          <h1 className='priceTitle'>Business</h1> 
          {/* <h2 className='oldPrice'>US$146.95</h2>
          <h1 className='newPrice'>$67.99</h1> */}
          <button className='button21'><a href="/contact">Get Your Budget</a></button>
          {/* <button className='button2'><a href="https://www.google.com">Contact</a></button> */}
          <div className='pricingTextDiv'>
            <p class="pricingP"><TiTick className='tick'/>Weekly Video-call with one of our representatives, defining Project Key Points</p>
            <p class="pricingP"><TiTick className='tick'/>Three video Corrections per project</p>
            <p class="pricingP"><TiTick className='tick'/>Expert Suggestions to achieve the perfect Format According to Your Media Strategy</p>
            <p class="pricingP"><TiTick className='tick'/>Widescreen and Vertical Video per project</p>
            <p class="pricingP"><TiTick className='tick'/>Script for your project</p>
            <p class="pricingP"><TiTick className='tick'/>Two Script Corrections per project</p>
           
          </div> 
        </div>
        {/* pricing 3 */}

        {/* pricing 2 */}
        <div className='card'>
          <h1 className='priceTitle'>Creator</h1> 
          {/* <h2 className='oldPrice'>US$146.95</h2>
          <h1 className='newPrice'>$67.99</h1> */}
          <button className='button21'><a href="/contact">Get Your Budget</a></button>
          {/* <button className='button2'><a href="https://www.google.com">Contact</a></button> */}
          <div className='pricingTextDiv'>
            <p class="pricingP"><TiTick className='tick'/>Weekly-calls with one of our representatives, defining Project Key Points</p>
            <p class="pricingP"><TiTick className='tick'/>Two video corrections per project</p>
            <p class="pricingP"><TiTick className='tick'/>Widescreen and Vertical Video per project</p>  
            <p class="pricingP"><TiTick className='tick'/>Expert Suggestions to achieve the perfect Format According to Your Media Strategy</p>

          </div> 
        </div>
          {/* pricing 2 */}
        
        
        
      </div>

      {/* card pricing details */}

      <div className='cardDetails'>
        <div className='insideCardDetails'>
          <MdHighQuality className='cardDetailsIcons'/>
          <h2 className='detailsTitle'>High Quality</h2>
          <p className='carDetailsText'>Our commitment to delivering high-quality results is unwavering, setting us apart as the premier choice for all your video editing needs.</p>
        </div>
        <div className='insideCardDetails'>
          <FaUsersCog className='cardDetailsIcons'/>
          <h2 className='detailsTitle'>Community</h2>
          <p className='carDetailsText'>Join a league of satisfied clients who have witnessed their projects transform into captivating masterpieces.</p>
        </div>
        <div className='insideCardDetails'>
          <FaPaintBrush className='cardDetailsIcons'/>
          <h2 className='detailsTitle'>Secure</h2>
          <p className='carDetailsText'>Don't let creative doubts hinder your video project. Our expert team collaborates with you to refine your video style, making your content truly exceptional.</p>
    

        </div>


      </div>

      {/* card pricing details */}
    
    {/* Complete the Form */}
    
      <UserContact/>
    {/* Complete the Form */}


    {/* faq */}
    <FaqWithBg/>
    {/* faq */}

   {/* footer */}
    <Footer/>
   {/* footer */}

    </div>
  )
}
