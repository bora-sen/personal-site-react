import React from "react"
import { NavLink } from "react-router-dom"
import FooterBg from "../../Assets/footer_bg.jpg"

function Footer() {
  return (
    <section className="w-full h-[100dvh] z-50 text-white tracking-wider">
      <div className="absolute w-full h-full -z-50">
        <img id="footer_back_image" className="w-full h-full object-cover object-center" alt="hero background" src={FooterBg} />
      </div>

      <div className="w-full h-full sm:relative flex flex-col items-center justify-center">
        <div className="items-center justify-center md:absolute md:bottom-0 flex flex-col w-full sm:flex-row sm:justify-start">
          <div className="grid uppercase mb-4">
            <span className="font-tusker-bold text-[7rem] lg:text-[14rem] leading-none">let's</span>
            <span className="font-tusker-bold text-[7rem] lg:text-[18rem] leading-none">connect</span>
          </div>

          <div className="font-tusker ml-6 mt-auto mb-4">
            <div className="text-2xl lg:text-[6rem] uppercase flex flex-col sm:flex-row mb-9 ">
              <span className="text-[4rem] my-6">are you minding a project ? </span>
              <a
                className="px-8 ml-4 py-4 text-5xl bg-white text-black rounded-full hover:bg-black hover:text-white transition-colors"
                href="mailto:bahattinborasen@gmail.com"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 text-4xl text-center">
              <a className="p-4 border-2 border-white rounded-full" href="https://linkedin.com/in/bborasen">
                linkedin
              </a>
              <a className="p-4 border-2 border-white rounded-full" href="https://instagram.com/senkisibora">
                instagram
              </a>
              <a className="p-4 border-2 border-white rounded-full" href="mailto:bahattinborasen@gmail.com">
                gmail
              </a>
              <a className="p-4 border-2 border-white rounded-full" href="https://github.com/bora-sen">
                github
              </a>
            </div>
          </div>
        </div>
      </div>

      <h5 className="text-center text-xs mb-2 text-gray-400">© 2023 Bahattin Bora Şen | All Rights Reserved</h5>
    </section>
  )
}

export default Footer
