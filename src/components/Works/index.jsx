import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useContext, useLayoutEffect } from "react"
import { MainContext } from "../../context/MainContext"
import { NavLink } from "react-router-dom"
gsap.registerPlugin(ScrollTrigger)

function Works() {
  const { works } = useContext(MainContext)
  console.log(works)
  const sel_works = works.slice(0, 4)
  console.log(sel_works)

  useLayoutEffect(() => {
    gsap.utils.toArray("#parallax_card").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
    })
  }, [works])

  return (
    <section className="w-full h-auto text-white mt-6">
      <h5 className="w-full text-center font-tusker text-9xl font-bold mb-4">Works</h5>

      {sel_works.map((work, index) => {
        return (
          <div key={index} id="parallax_card" className="flex w-full lg:flex-row flex-col h-screen bg-black z-10 mt-12 pt-14 sm:pt-0 snap-start">
            <div className="lg:w-1/2 w-full lg:h-full">
              <div className="h-full flex items-center justify-center bg-primary-purple p-12">
                <img className="transition-all hover:drop-shadow-[10px_10px_0_rgba(3,3,0,1)]" src={work.placeholderImg} alt="test" />
              </div>
            </div>
            <div className="lg:w-1/2 grid my-auto p-4">
              <h4 className="font-tusker text-9xl">{work.title}</h4>
              <p className="leading-relaxed text-xl my-4 uppercase w-full lg:w-[37rem]">
                {work.desc}
              </p>
              <NavLink
                className="block mx-auto border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black hover:text-bold transition-all"
                to={work.redURL}
              >
                Go To Project
              </NavLink>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Works
