import React from 'react'
import DropDownOption from './DropDownOption'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footerImageDiv'>
            <img className='footerImage' src="https://res.cloudinary.com/dtdjv6zdl/image/upload/v1691079163/Media_White_teovlo.png" alt="" />
        </div>
        <div className='footerText'>
            <div className='footerText2'>
            <h1 className='footerH1'>Products</h1>
                <a className='footerp' href="/contact">Youtube Video Editing</a>
                <a className='footerp' href="/contact">Web design</a>
                <a className='footerp' href="/contact">Social Media Video ads</a>
                <a className='footerp' href="/contact">Products</a>
            </div>
            <div className='footerText2'>
            <h1 className='footerH1'>Contact Us</h1>
                <a className='footerp' href="/contact">About Us</a>
                <a className='footerp' href="/contact">Schedule a Call</a>
                <a className='footerp' href="/contact">Contact via E-mail</a>
                {/* <a className='footerp' href="">Products</a> */}
                {/* <p className='footerp'>Youtube Video Editing</p> */}
            </div>
            <div className='footerText2'>
            <h1 className='footerH1'>Pricing</h1>
                <a className='footerp' href="/contact">Youtube Video Editing</a>
                <a className='footerp' href="/contact">Web design</a>
                <a className='footerp' href="/contact">Social Media Video ads</a>
                <a className='footerp' href="/contact">Products</a>
            </div>
        </div>
    

        {/* Dropddown */}
        <div className='dropDown'>
         <DropDownOption title='Products' options={[
            {title: 'Youtube Video Editing', href: "/contact"}, 
            {title: 'Live Streaming', href: "/contact"}, 
            {title: 'Tutorial Editing', href: "/contact"}, 
            {title: 'Educational Content', href: "/contact"}]}
            />
         <DropDownOption title="Contact Us" options={[
            {title: 'Youtube Video Editing', href: "/contact"}, 
            {title: 'Live Streaming', href: "/contact"}, 
            {title: 'Tutorial Editing', href: "/contact"}, 
            {title: 'Educational Content', href: "/contact"}]}
            />
         <DropDownOption title="Pricing" options={[
            {title: 'Youtube Video Editing', href: "/contact"}, 
            {title: 'Live Streaming', href: "/contact"}, 
            {title: 'Tutorial Editing', href: "/contact"}, 
            {title: 'Educational Content', href: "/contact"}]}
            />
         {/* Dropddown */}
        </div>
    </div>
    
  )
}
