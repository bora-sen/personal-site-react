import React, { useContext } from 'react'
import Reveal from 'react-reveal/Fade'
import { MainContext } from '../../../context/MainContext';

function OnTheWeb() {
  const {socials} = useContext(MainContext);
  return (
    <Reveal delay={250}>
    <section className='p-2'>
      <h3 className='text-xl underline font-bold decoration-4 text-accentOrange' >On The Web:</h3>
      <ul className='mt-2'>
        {socials.map((social,index) => {
          return (
          <li key={index} className='flex items-center mb-2 hover:animate-pulse'>
            <a className='flex items-center gap-1' href={social.redURL}>            
            <img className='w-8 rounded-md mr-1 stro stroke-slate-900 bg-accentAqua p-1' src={social.placeholderImg} alt={`${social.title}'s Placeholder`}/>
              <span className='text-primary-dark font-poppins dark:text-primary'>{social.title}</span>
              </a>
          </li>
          )
        })}
      </ul>
    </section>
    </Reveal>
  )
}

export default OnTheWeb