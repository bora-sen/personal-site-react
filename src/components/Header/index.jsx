import React from 'react'
import ThemeSwitchButton from '../ThemeSwitchButton'

function Header() {
  return (
    <section className='sticky flex-col sm:flex-row gap-4 sm:gap-0 top-0 z-10 font-poppins flex justify-between items-center px-3 py-2 h-auto mb-4 shadow-xl backdrop-blur-sm'>
      
      <div className='group flex hover:cursor-default'>
      <svg className='stroke-primary-dark dark:stroke-primary w-8 h-8 sm:w-6 sm:h-6 mr-2 sm:-rotate-12 sm:group-hover:rotate-0 transition-all' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25h16.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25Z" /><path d="m4.5 5.25 3.75 3-3.75 3" /><path d="M9 11.25h3" /></svg>
        <h1 className='font-bold text-2xl sm:text-lg'>Bahattin Bora Şen</h1>
      </div>

      <div className='flex items-center justify-center gap-8'>
        <ul className='flex gap-6 items-center'>
          <li>
            <a href="https://github.com/bora-sen">Github</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/bborasen">Linkedin</a>
          </li>
          <li>
            <a href="mailto:bahattinborasen@gmail.com">Mail Me!</a>
          </li>
        </ul>
        <div>
          <ThemeSwitchButton />
        </div>
      </div>

    </section>
  )
}

export default Header