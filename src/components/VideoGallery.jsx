import React from 'react'
import VideoCard from './VideoCard'



export default function VideoGallery() {
  const videos = [
    {title: 'BeInCrypto Academy', src: 'https://player.vimeo.com/video/838395479?h=4a2eb4f35a&title=0&byline=0&controls=0&muted=1',description: "BeInCrypto Academy Social Media Advertisement"},
    {title: 'Military Mental Endurance', src: 'https://player.vimeo.com/video/727434304?h=01252be075&title=0&byline=0&controls=0&muted=1', description: "Experience the essence of Military Mental Endurance in this engaging video, part of our inspiring digital campaign."},
    {title: 'Barukas', src: 'https://player.vimeo.com/video/707382489?h=655f084294&title=0&byline=0&controls=0&muted=1',description: "Multiplatform Media Advertisement for Barukas."},
    {title: 'NeoBom', src: 'https://player.vimeo.com/video/727434706?h=bee0217ab9a&title=0&byline=0&controls=0&muted=1',description: "NeoBom Istagram Advertisement"},
    {title: 'Miami Bitconf', src: 'https://player.vimeo.com/video/701471086?h=4f0e5eb6d1&title=0&byline=0&controls=0&muted=1',description: "Social media advertisement for BitConf 2021 - Miami's largest blockchain event!"},
    {title: 'Indoor Gardens', src: 'https://player.vimeo.com/video/727433735?h=0eea9cab67&title=0&byline=0&controls=0&muted=1', description: "Multiplatform Media Advertisement for Indoor Gardens"},
]

  return (
    <div className='videoGallery'>
        <VideoCard videos={videos}/>
    </div>
  )
}
