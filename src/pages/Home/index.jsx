import React from 'react'
import {Footer, Header} from '../../components'
import { OnTheWeb, Welcome, WhoAmI } from './components'

function Home() {


  return (
    <main className='font-poppins sm:w-[42rem] mx-auto dark:text-primary'>
      <Header />
      <Welcome />
      <WhoAmI />
      <OnTheWeb />



      <Footer />
    </main>
  )
}

export default Home