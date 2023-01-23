import React from 'react'
import { GithubProfileIMG, LinkedInProfileIMG } from '../assets'
import Reveal from 'react-reveal/Fade'

function OnTheWeb() {
  return (
    <Reveal delay={250}>
    <section className='p-2'>
      <h3 className='text-xl underline font-bold decoration-4 text-accentOrange' >On The Web:</h3>
      <ul className='mt-2'>
        <li className='flex items-center mb-2'>
          <a className='flex items-center gap-1 ' href="https://github.com/bora-sen">            
          <img className='w-56 rounded-md mr-1' src={GithubProfileIMG} alt="sadlfj"/>
            My github Profile</a>
        </li>
        <li className='flex items-center mb-2'>
          <a className='flex items-center gap-1 ' href="https://linkedin.com/in/bborasen">
          <img src={LinkedInProfileIMG} className="w-56 rounded-md mr-1" alt="" />
            Linkedin</a>
        </li>
      </ul>
    </section>
    </Reveal>
  )
}

export default OnTheWeb