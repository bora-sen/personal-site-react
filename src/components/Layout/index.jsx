import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Layout({children}) {
    return (
      <main className='font-poppins dark:text-primary sm:w-[45rem] md:w-[50rem] mx-auto'>
          <Header />
              {children}
          <Footer />
          
      </main>
    )
}

export default Layout