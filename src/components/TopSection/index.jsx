import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useLayoutEffect } from "react"
import Hero from "../Hero"
import WhoAmi from "../WhoAmi"
import MainHeroBg from "../../Assets/hero_bg.jpg"
gsap.registerPlugin(ScrollTrigger)

function TopSection() {
  useLayoutEffect(() => {
    gsap.to("#back_image", {
      scrollTrigger: {
        trigger: "#whoami_section",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
      },
      opacity: 0,
    })
  })
  return (
    <section className="pt-4 sm:pt-0">
      <div className="absolute w-full h-[140svh] -z-50">
        <img id="back_image" className="w-full h-full object-cover object-center" alt="hero background" src={MainHeroBg} />
      </div>
      <Hero />
      <WhoAmi />
    </section>
  )
}

export default TopSection
