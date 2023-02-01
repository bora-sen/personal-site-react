import React from 'react'

function PhotoHeader() {
  return (
    <section>
      <div className='bg-gray-800 text-gray-50 flex items-center justify-between h-16'>
        <div>
          <h1 className='ml-4 font-bold font-poppins text-2xl'>@photobybora</h1>
        </div>
        <div>
          <ul className='flex gap-4 font-thin mr-4 text-sm'>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/jobs">Instagram</a></li>
            <li><a href="/jobs">Services</a></li>
            <li><a href="mailto:bahattinborasen@gmail.com">Mail Me!</a></li>
          </ul>

        </div>

      <div>
      <ul className='flex gap-3 text-lg mr-4'>
            <li className='w-4 h-4'><a href="/jobs">
            <svg fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></svg>
              </a></li>
            <li className='w-4 h-4'><a href="mailto:bahattinborasen@gmail.com">
            <svg fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
              </a></li>
        </ul>

      </div>


      </div>

    </section>
  )
}

export default PhotoHeader