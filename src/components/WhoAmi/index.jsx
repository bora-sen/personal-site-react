import { OrbitControls } from "@react-three/drei"
import React, { Suspense, useLayoutEffect, useRef } from "react"
import { Canvas } from "react-three-fiber"
import LoadedModel from "../../LoadedModel"
import { gsap } from "gsap"

function WhoAmi() {
  const leftRef = useRef()
  const rightRef = useRef()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0.3,
        color: "#000",
        duration: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
        xPercent: -100,
      })
      gsap.from(rightRef.current, {
        opacity: 0.3,
        color: "#000",
        duration: 2,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
        xPercent: 100,
      })
    }, rightRef.current)
    return () => ctx.revert()
  }, [])
  return (
    <section id="whoami_section" className="text-white w-full h-[100dvh] overflow-hidden">
      <div className="flex md:flex-row flex-col-reverse h-full">
        <div id="left" ref={leftRef} className="w-full md:w-1/2 flex justify-center items-center">

          <div className="w-full lg:w-[55rem] p-4">

            <div className="grid mb-4">
              <h3 className="font-tusker-bold uppercase text-9xl">Hi!</h3>
              <h4 className="font-poppins font-bold uppercase text-5xl">I'm Bora</h4>
            </div>

            <p className="leading-tight uppercase tracking-wider font-poppins font-light text-xl md:text-4xl">
              Creative and ambitious individual with a passion for building comprehensive digital solutions. Loves to explore new technologies to bring their
              visions to life. Not afraid to experiment with different approaches to problem-solving.
            </p>
          </div>
        </div>
        <div ref={rightRef} className="w-full h-[100dvh] md:w-1/2 md:h-full -z-50 xm:z-50">
          <Canvas>
            <OrbitControls enableZoom={false} enablePan autoRotate autoRotateSpeed={0.36} />
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 3, 0]} />
            <pointLight position={[-2, -1, 2]} intensity={1} color="#1b6cbb" />
            <pointLight position={[-2, -1, 0]} intensity={1} color="#a92e7a" />
            <Suspense fallback={null}>
              <LoadedModel />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default WhoAmi
