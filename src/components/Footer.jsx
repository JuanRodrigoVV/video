import React from 'react'
import DropDownOption from './DropDownOption'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footerImageDiv'>
            <img className='footerImage' src="https://drive.google.com/uc?id=1dqoICrvJWre1ff2KzYWTxSIyB0wOowfQ" alt="" />
        </div>
        <div className='footerText'>
            <div className='footerText2'>
            <h1 className='footerH1'>Products</h1>
                <a className='footerp' href="">Youtube Video Editing</a>
                <a className='footerp' href="">Web design</a>
                <a className='footerp' href="">Social Media Video ads</a>
                <a className='footerp' href="">Products</a>
            </div>
            <div className='footerText2'>
            <h1 className='footerH1'>Contact Us</h1>
                <a className='footerp' href="">About Us</a>
                <a className='footerp' href="">Schedule a Call</a>
                <a className='footerp' href="">Contact via E-mail</a>
                {/* <a className='footerp' href="">Products</a> */}
                {/* <p className='footerp'>Youtube Video Editing</p> */}
            </div>
            <div className='footerText2'>
            <h1 className='footerH1'>Pricing</h1>
                <a className='footerp' href="">Youtube Video Editing</a>
                <a className='footerp' href="">Web design</a>
                <a className='footerp' href="">Social Media Video ads</a>
                <a className='footerp' href="">Products</a>
            </div>
        </div>
        {/* <div className='select'>
            <div className='option'>
                <label for="videoOptions" className='selectLabel'>Selecciona una opción:</label>
                <select id="videoOptions">
                <option value="video1">Video 1</option>
                <option value="video2">Video 2</option>
                <option value="video3">Video 3</option>
                </select>
            </div>
            <div className='option'>
                <label for="videoOptions" className='selectLabel'>Selecciona una opción:</label>
                <select id="videoOptions">
                <option value="video1">Video 1</option>
                <option value="video2">Video 2</option>
                <option value="video3">Video 3</option>
                </select>
            </div>
            <div className='option'>
                <label for="videoOptions" className='selectLabel'>Selecciona una opción:</label>
                <select id="videoOptions">
                <option value="video1">Video 1</option>
                <option value="video2">Video 2</option>
                <option value="video3">Video 3</option>
                </select>
            </div>
            
        </div> */}

        {/* prueba de dropddown */}
        <div className='dropDown'>
         <DropDownOption options={[
            {title: 'Youtube Video Editing', href: "https://www.google.com"}, 
            {title: 'Live Streaming', href: "https://www.google.com"}, 
            {title: 'Tutorial Editing', href: "https://www.google.com"}, 
            {title: 'Educational Content', href: "https://www.google.com"}]}
            />
         <DropDownOption options={[
            {title: 'Youtube Video Editing', href: "https://www.google.com"}, 
            {title: 'Live Streaming', href: "https://www.google.com"}, 
            {title: 'Tutorial Editing', href: "https://www.google.com"}, 
            {title: 'Educational Content', href: "https://www.google.com"}]}
            />
         <DropDownOption options={[
            {title: 'Youtube Video Editing', href: "https://www.google.com"}, 
            {title: 'Live Streaming', href: "https://www.google.com"}, 
            {title: 'Tutorial Editing', href: "https://www.google.com"}, 
            {title: 'Educational Content', href: "https://www.google.com"}]}
            />
         {/* <DropDownOption/>
         <DropDownOption/> */}
        </div>
    </div>
    
  )
}
