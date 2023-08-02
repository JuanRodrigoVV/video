import React, { useState } from 'react';

export default function VideoCard({ videos }) {
  const [videoStates, setVideoStates] = useState(
    videos.map(() => ({ loop: false }))
  );

  const handleVideoHover = (index) => {
    const updatedStates = [...videoStates];
    updatedStates[index].loop = true;
    setVideoStates(updatedStates);
  };

  const handleVideoLeave = (index) => {
    const updatedStates = [...videoStates];
    updatedStates[index].loop = false;
    setVideoStates(updatedStates);
  };

  return (
    <>
      {videos.map(({ title, src, description, link }, index) => (
       <div className='videoCardContainer'>
       <div className='videoCard' key={title}>
          <iframe
            
            onMouseOver={() => handleVideoHover(index)}
            onMouseOut={() => handleVideoLeave(index)}
            src={`${src}${videoStates[index].loop ? '&autoplay=1&loop=1' : ''}`}
            width="100%"
            height="auto"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            preload="metadata" 
            
            ></iframe>

        </div>
          <div className='descriptionCard'>
         <a className='cardVideoTitle' target="_blank"  href={link}>{title}</a>
          <p className='videoCardP'>{description}</p>
          </div>
            </div>

      ))}
    </>
  );
}
