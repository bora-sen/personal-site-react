import React, { useContext } from 'react'
import { MainContext } from '../../../context/MainContext';

function Works() {
  const {works} = useContext(MainContext);
  return (
    <section className='p-2'>
      <h3 className='text-xl underline decoration-4 font-bold text-accentOrange'>Works</h3>
      <ul className='flex gap-2 mt-2'>
        {works.map((work,index) => {
          return (
            <li key={index} className='flex flex-col mb-2'>
            <a className='text-center mt-1' href={work.redURL}>
            <img className='w-56 rounded-md mr-1' src={work.placeholderImg} alt={`${work.title}'s Placeholder`}/>
              {work.title}</a>
          </li>
          )
        })}

      </ul>
      </section>
  )
}

export default Works