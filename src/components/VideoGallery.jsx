import React from 'react'
import VideoCard from './VideoCard'



export default function VideoGallery() {
  const videos = [
    {title: 'BeInCrypto Academy', src: 'https://player.vimeo.com/video/838395479?h=4a2eb4f35a&title=0&byline=0&controls=0&muted=1',description: "BeInCrypto Academy Add made for advertisement"},
    {title: 'Military Mental Endurance  ', src: 'https://player.vimeo.com/video/727434304?h=01252be075&title=0&byline=0&controls=0&muted=1', description: "BeInCrypto Academy Add made for advertisement"},
    {title: 'Barukas', src: 'https://player.vimeo.com/video/707382489?h=655f084294&title=0&byline=0&controls=0&muted=1',description: "BeInCrypto Academy Add made for advertisement"},
    {title: 'BeInCrypto Academy', src: 'https://player.vimeo.com/video/727434706?h=bee0217ab9a&title=0&byline=0&controls=0&muted=1',description: "BeInCrypto Academy Add made for advertisement"},
    {title: 'Miami Bitconf', src: 'https://player.vimeo.com/video/701471086?h=4f0e5eb6d1&title=0&byline=0&controls=0&muted=1',description: "BeInCrypto Academy Add made for advertisement"},
    {title: 'Barukas', src: 'https://player.vimeo.com/video/727433735?h=0eea9cab67&title=0&byline=0&controls=0&muted=1', description: "BeInCrypto Academy Add made for advertisement"},
]

  return (
    <div className='videoGallery'>
        <VideoCard videos={videos}/>
    </div>
  )
}
