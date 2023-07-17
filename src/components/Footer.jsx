import React from 'react'

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
    </div>
    
  )
}
