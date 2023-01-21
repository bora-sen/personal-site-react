import React from 'react'
import Reveal from 'react-reveal/Fade'
import { WorksDraw, WorksHermor } from '../assets'

function Works() {
  return (
    <Reveal delay={300}>
    <section className='p-2'>
      <h3 className='text-xl underline decoration-4 font-bold text-accentOrange' >Works</h3>
      <ul className='flex gap-2 mt-2'>
        <li className='flex flex-col mb-2'>
          <a className='text-center mt-1' href="https://hermorsuffer.com">
          <img className='w-56 rounded-md mr-1' src={WorksHermor} alt="sadlfj"/>
            HERMORSUFFER Website</a>
        </li>
        <li className='flex flex-col mb-2'>
          <a className='text-center mt-1' href="https://drawndpaint.com">            
          <img src={WorksDraw} className="w-56 rounded-md mr-1" alt="" />
            DrawndPaint Website</a>
        </li>
      </ul>
    </section>
    </Reveal>
  )
}

export default Works