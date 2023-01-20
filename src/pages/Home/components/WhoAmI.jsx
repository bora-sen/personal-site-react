import React from 'react'
import Reveal from 'react-reveal/Fade'

function WhoAmI() {
  return (
    <Reveal delay={100}>
    <section className='p-2'>
      <h3 className='text-xl underline font-bold text-accent'>Who Am I ?</h3>
      <p className='font-light'>Bora is a freelance front-end developer based in Istanbul with a passion for building beautiful websites. He has a knack for all things launching products, from planning and designing all the way to solving problems with code. When not online, he takes photos and loves to play guitar.</p>
    </section>
    </Reveal>
  )
}

export default WhoAmI