import React from "react"

function Header() {
  return (
    <section
      id="header"
      className="sticky top-0 py-4 sm:py-6 text-white flex-col sm:flex-row gap-4 sm:gap-0 z-50 font-poppins flex justify-between items-center px-3 h-auto shadow-xl backdrop-blur-md w-full"
    >
      <div className="w-full flex-row flex items-center justify-between gap-8 px-12">
        <div className="w-full sm:w-auto text-center sm:text-start">
          <span className="tracking-wider font-bold">Bahattin Bora Şen</span>
        </div>
        <ul className="hidden sm:flex gap-6 items-center">
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
      </div>
    </section>
  )
}

export default Header
