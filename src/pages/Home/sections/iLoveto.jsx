import React from 'react'
import Reveal from 'react-reveal/Fade'

function ILoveTo() {
  return (
    <Reveal delay={300}>
    <section className='p-2'>
      <h3 className='text-xl underline decoration-4 font-bold text-accentOrange' >I ♥</h3>
      <p><a className='text-accentGreen' href="https://instagram.com/photobybora">Photography</a>, Dancing, <a className='text-accentGreen' href="https://instagram.com/senkisibora">Playing Guitar</a>, Singing, <a className='text-accentGreen' href="/">Listening & Recording Music</a>  </p>
    </section>
    </Reveal>
  )
}

export default ILoveTo