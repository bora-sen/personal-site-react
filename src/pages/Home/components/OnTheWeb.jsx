import React from 'react'
import { GithubProfileIMG, InstagramProfile, LinkedInProfileIMG } from '../assets'
import Reveal from 'react-reveal/Fade'

function OnTheWeb() {
  return (
    <Reveal delay={250}>
    <section className='p-2'>
      <h3 className='text-xl underline font-bold text-accent' >On The Web:</h3>
      <ul className='mt-2'>
        <li className='flex items-center mb-2'>
          <img className='w-56 rounded-md mr-1' src={GithubProfileIMG} alt="sadlfj"/>
          <a href="https://github.com/bora-sen">My github Profile</a>
        </li>
        <li className='flex items-center mb-2'>
          <img src={LinkedInProfileIMG} className="w-56 rounded-md mr-1" alt="" />
          <a href="https://linkedin.com/in/bborasen">Linkedin</a>
        </li>
        <li className='flex items-center mb-2'>
          <img src={InstagramProfile} className="w-56 rounded-md mr-1" alt="" />
          <a href="https://github.com/bora-sen">LeetCode Profile</a>
        </li>
      </ul>
    </section>
    </Reveal>
  )
}

export default OnTheWeb