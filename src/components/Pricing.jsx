import React from 'react'
import {TiTick} from 'react-icons/ti'
import {MdOutlineSecurity} from 'react-icons/md'
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
          <h1 className='priceTitle'>Filmora 12 Features</h1> 
          <h2 className='oldPrice'>US$146.95</h2>
          <h1 className='newPrice'>$67.99</h1>
          <button className='button21'><a href="https://www.google.com">PayPal</a></button>
          <button className='button2'><a href="https://www.google.com">Contact</a></button>
          <div className='pricingTextDiv'>
            <p class="pricingP"><TiTick className='tick'/>No Watermark on Your Exported Videos</p>
            <p class="pricingP"><TiTick className='tick'/>Get access to Filmora 12 for life</p>
            <p class="pricingP"><TiTick className='tick'/>Stock Media (Unsplash, Giphy, Pixabay, Pexel)</p>
            <p class="pricingP"><TiTick className='tick'/>Filmstock Standard</p>
            <p class="pricingP"><TiTick className='tick'/>NewBlue FX</p>
            <p class="pricingP"><TiTick className='tick'/>Boris FX</p>
            <p class="pricingP"><TiTick className='tick'/>AI Portrait</p>
            <p class="pricingP"><TiTick className='tick'/>10GB of Filmora cloud storage</p>
            <p class="pricingP"><TiTick className='tick'/>Speech-to-Text 30 mins</p>
            <p class="pricingP"><TiTick className='tick'/>Text-to-Speech 5000 characters</p>
          </div> 
        </div>
        {/* pricing 1 */}


        {/* pricing 2 */}
        <div className='card'>
          <h1 className='priceTitle'>Filmora 12 Features</h1> 
          <h2 className='oldPrice'>US$146.95</h2>
          <h1 className='newPrice'>$67.99</h1>
          <button className='button21'><a href="https://www.google.com">PayPal</a></button>
          <button className='button2'><a href="https://www.google.com">Contact</a></button>
          <div className='pricingTextDiv'>
            <p class="pricingP"><TiTick className='tick'/>No Watermark on Your Exported Videos</p>
            <p class="pricingP"><TiTick className='tick'/>Get access to Filmora 12 for life</p>
            <p class="pricingP"><TiTick className='tick'/>Stock Media (Unsplash, Giphy, Pixabay, Pexel)</p>
            <p class="pricingP"><TiTick className='tick'/>Filmstock Standard</p>
            <p class="pricingP"><TiTick className='tick'/>NewBlue FX</p>
            <p class="pricingP"><TiTick className='tick'/>Boris FX</p>
            <p class="pricingP"><TiTick className='tick'/>AI Portrait</p>
            <p class="pricingP"><TiTick className='tick'/>10GB of Filmora cloud storage</p>
            <p class="pricingP"><TiTick className='tick'/>Speech-to-Text 30 mins</p>
            <p class="pricingP"><TiTick className='tick'/>Text-to-Speech 5000 characters</p>
          </div> 
        </div>
          {/* pricing 2 */}
        
        
        
        {/* pricing 3 */}
        <div className='card'>
          <h1 className='priceTitle'>Filmora 12 Features</h1> 
          <h2 className='oldPrice'>US$146.95</h2>
          <h1 className='newPrice'>$67.99</h1>
          <button className='button21'><a href="https://www.google.com">PayPal</a></button>
          <button className='button2'><a href="https://www.google.com">Contact</a></button>
          <div className='pricingTextDiv'>
            <p class="pricingP"><TiTick className='tick'/>No Watermark on Your Exported Videos</p>
            <p class="pricingP"><TiTick className='tick'/>Get access to Filmora 12 for life</p>
            <p class="pricingP"><TiTick className='tick'/>Stock Media (Unsplash, Giphy, Pixabay, Pexel)</p>
            <p class="pricingP"><TiTick className='tick'/>Filmstock Standard</p>
            <p class="pricingP"><TiTick className='tick'/>NewBlue FX</p>
            <p class="pricingP"><TiTick className='tick'/>Boris FX</p>
            <p class="pricingP"><TiTick className='tick'/>AI Portrait</p>
            <p class="pricingP"><TiTick className='tick'/>10GB of Filmora cloud storage</p>
            <p class="pricingP"><TiTick className='tick'/>Speech-to-Text 30 mins</p>
            <p class="pricingP"><TiTick className='tick'/>Text-to-Speech 5000 characters</p>
          </div> 
        </div>
        {/* pricing 3 */}
      </div>

      {/* card pricing details */}

      <div className='cardDetails'>
        <div className='insideCardDetails'>
          <MdOutlineSecurity className='cardDetailsIcons'/>
          <h2 className='detailsTitle'>Secure</h2>
          <p className='carDetailsText'>We value your privacy and protect your financial/personal info with advanced encryption and advanced fraud protection.</p>
        </div>
        <div className='insideCardDetails'>
          <MdOutlineSecurity className='cardDetailsIcons'/>
          <h2 className='detailsTitle'>Secure</h2>
          <p className='carDetailsText'>We value your privacy and protect your financial/personal info with advanced encryption and advanced fraud protection.</p>
        </div>
        <div className='insideCardDetails'>
          <MdOutlineSecurity className='cardDetailsIcons'/>
          <h2 className='detailsTitle'>Secure</h2>
          <p className='carDetailsText'>We value your privacy and protect your financial/personal info with advanced encryption and advanced fraud protection.</p>
    

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
