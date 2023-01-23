import React from 'react'
import {Footer, Header} from '../../components'
import { ILoveTo, OnTheWeb, RotateHouse, WhoAmI, Works } from './sections'

function Home() {


  return (
    <main className='font-poppins sm:w-[42rem] mx-auto dark:text-primary'>
      <Header />
      <RotateHouse />
      <WhoAmI />
      <ILoveTo />
      <OnTheWeb />
      <Works />
      <Footer />
    </main>
  )
}

export default Home