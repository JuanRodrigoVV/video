import React from 'react'
import {TiTick} from 'react-icons/ti'
import Footer from './Footer'
import VideoGallery from './VideoGallery'


export default function About() {
  return (
    <div className='about'>


        <h1 className='aboutTitle'>Unlock Your Digital Potential with Our Creative Team</h1>
     <div className='textAboutUs'>
       <p className='aboutText'>
            At Leatnik, we are passionate about crafting captivating digital content that helps businesses like yours reach new heights. With over 8 years of experience in the industry, we specialize in enhancing your online presence and empowering you to achieve your digital goals.
            <span className='spanAbout'>
            Put your content in the hands of experts who truly care about your success. 
            
            </span>
            Whether you need a stunning video campaign, engaging copy, a website that converts, or a complete digital strategy, we have you covered.

            Join us on this exciting journey of unlocking your digital potential. Let's make your brand shine and leave a lasting impression on your audience."           
       </p>
      </div>

    <VideoGallery/>


      <div className='why'>
          <h1 className='aboutTitle'>Why choose us?</h1>
          <p className='aboutText'><TiTick className='tick2'/>
          Expertise that Matters: Our team consists of seasoned professionals in multimedia design and digital communication. From talented filmmakers to creative copywriters, video editors, and web designers, we have the right experts to bring your vision to life.
          </p>
          <p className='aboutText'><TiTick className='tick2'/>
          Tailored Solutions: We believe in understanding your unique needs and goals. Our creative solutions are tailored to fit your brand identity, ensuring that your content stands out from the crowd.         
           </p>
          <p className='aboutText'><TiTick className='tick2'/>
          Boost Your Digital Presence: Let us take your online presence to the next level. We know the digital landscape inside out and will help you build a loyal following and increase your reach to your target audience.           </p>
          <p className='aboutText'><TiTick className='tick2'/>
          Innovation and Creativity: Embracing innovation is in our DNA. Our team is always ahead of the curve, incorporating the latest trends and technologies to create content that is both relevant and impactful.           </p>
          <p className='aboutText'><TiTick className='tick2'/>
          Customer Satisfaction: Your success is our success. We are dedicated to delivering top-notch results that exceed your expectations. Your satisfaction is at the heart of everything we do.           </p>
      </div>




    <Footer/>
    </div>
  )
}
