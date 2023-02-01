import React from 'react'
import Reveal from 'react-reveal/Fade'

function PhotoCollage({photo}) {
  return (
    <Reveal enter>
      <div className='w-[100%] h-[30rem] md:w-[32%] md:h-auto  m-1 grayscale hover:filter-none transition-all overflow-hidden'>
        <div className=''>
          <span className='text-white'>test</span>
        </div>
        <img className='w-full h-full object-cover hover:scale-[1.03] transition-all -z-10' src={photo} alt="" />
      </div>
    </Reveal>
  )
}

export default PhotoCollage