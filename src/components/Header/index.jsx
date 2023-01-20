import React from 'react'
import ThemeSwitchButton from '../ThemeSwitchButton'

function Header() {
  return (
    <section className='sticky top-0 z-10 font-poppins flex justify-between items-center px-3 py-2 h-16 mb-4 shadow-xl backdrop-blur-sm'>
      <div className='group flex hover:cursor-default'>
        <svg className='w-6 fill-primary dark:fill-primary-dark dark:stroke-primary -rotate-12 mr-1 transition-all group-hover:rotate-0' stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.412 7.214c.729 5.184-3.2 9.528-6.167 9.946-2.968.418-7.945-2.695-8.672-7.86A7.492 7.492 0 0 1 19.41 7.214h.002Z" />
          <path d="M11.065 14.443c-1.539-.609-3.144-2.02-3.856-4.005" />
          <path d="M17.236 23.238c-1.539-.61-2.967-1.878-3.68-3.863" />
          <path d="m12.502 17.263-.43 2.326 2.968-.417-1.054-2.117-1.484.208Z" />
        </svg>
        <h1 className='font-bold'>Bahattin Bora Şen</h1>
      </div>
      <div className='flex mx-auto'>
        <ul className='flex gap-6 items-center'>
          <li>
            <a href="/">Github</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
        </ul>
      </div>
      <div>
          <ThemeSwitchButton />
        </div>
    </section>
  )
}

export default Header