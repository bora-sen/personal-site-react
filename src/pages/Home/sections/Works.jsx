import React, { useContext } from 'react'
import { MainContext } from '../../../context/MainContext';

function Works() {
  const {works} = useContext(MainContext);
  return (
    <section className='p-2'>
      <h3 className='text-2xl underline decoration-4 font-bold text-accentOrange'>Works</h3>
      <ul className='flex flex-wrap justify-around gap-4 mt-4'>
        {works.map((work,index) => {
          return (
            <li key={index} className='flex flex-col mb-2'>
            <a className='text-center' href={work.redURL}>
              <img className='w-full sm:w-[21rem] rounded-md mr-1' src={work.placeholderImg} alt={`${work.title}'s Placeholder`}/>
              <span className='mt-2'>{work.title}</span>
            </a>
          </li>
          )
        })}

      </ul>
      </section>
  )
}

export default Works