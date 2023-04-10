import { Power4, gsap } from "gsap"
import React, { useLayoutEffect } from "react"

function Hero() {
  useLayoutEffect(() => {
    gsap.timeline().fromTo(
      ".hero_text",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.67,
        delay: 0.5,
        ease: Power4.easeOut,
      }
    )
    gsap.fromTo(
      ".hero_desc_text",
      {
        yPercent: -800,
      },
      {
        yPercent: 0,
        duration: 0.35,
        stagger: 0.18,
        delay: 0.4,
        ease: Power4.easeOut,
      }
    )
  }, [])
  return (
    <section id="hero_section" className="w-full h-[110dvh] text-white ">
      <div className="w-full h-[97dvh] flex sm:flex-row flex-col lg:justify-between">
        <div id="hero_titles" className="absolute bottom-0 md:w-[45rem] mt-auto">
          <div className="grid font-tusker-bold leading-none ml-2">
            <span className="hero_text text-[5rem] sm:text-[6rem] md:text-[6rem]">Junior</span>
            <span className="hero_text text-[8rem] sm:text-[10rem] md:text-[10rem]">Full-Stack</span>
            <span className="hero_text text-[6rem] sm:text-[8rem] md:text-[10rem]">Developer</span>
          </div>
        </div>
        <div id="hero_desc_text" className="font-poppins absolute right-0 text-right font-bold grid uppercase text-[1rem] lg:text-5xl xl:text-6xl">
          <span className="hero_desc_text">Learning,</span>
          <span className="hero_desc_text">experimenting,</span>
          <span className="hero_desc_text">creating and constantly pushing </span>
          <span className="hero_desc_text">the boundaries of what's possible.</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
