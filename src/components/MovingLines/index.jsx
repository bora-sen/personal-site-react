import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useContext, useLayoutEffect } from "react"
import { MainContext } from "../../context/MainContext"

import MovingLinesBg from "../../Assets/moving_lines_bg.jpg"
gsap.registerPlugin(ScrollTrigger)

function MovingLines() {
  const { works } = useContext(MainContext)

  const titles = []
  works.map((work) => {
    return titles.push(work.title)
  })
  const titlesText = titles.join(" | ")
  const titlesReverseText = titles.reverse().join(" | ")
  useLayoutEffect(() => {
    gsap.fromTo(
      ".moving_text_left",
      {
        x: 0,
      },
      {
        scrollTrigger: {
          trigger: "#moving_texts_section",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
        x: 170,
      }
    )
    gsap.fromTo(
      ".moving_text_right",
      {
        x: 0,
      },
      {
        scrollTrigger: {
          trigger: "#moving_texts_section",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
        x: -170,
      }
    )
  }, [])
  return (
    <section id="moving_texts_section" className="w-full h-screen text-white flex items-center justify-center">
      <div className="absolute w-full h-full z-30">
        <img id="moving_lines_back_image" className="w-full h-full object-cover object-center" alt="hero background" src={MovingLinesBg} />
      </div>

      <div className="overflow-hidden z-40 h-full w-full flex items-center justify-center text-center">
        <div className="font-tusker whitespace-nowrap rotate-[24deg] sm:rotate-[7deg]">
          <div className="moving_text_left text-7xl mb-3">
            <span>{titlesText}</span>
          </div>
          <div className="moving_text_right text-9xl">
            <span>{titlesReverseText}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovingLines
