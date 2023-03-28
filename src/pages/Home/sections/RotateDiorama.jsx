import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import React, { Suspense, useContext } from "react"
import { Canvas } from "react-three-fiber"
import { ThemeContext } from "../../../context/ThemeContext"
import LoadedModel from "../../../LoadedModel"

function RotateHouse() {
  let theme = useContext(ThemeContext).Theme

  function handleLights() {
    if (theme === "light") {
      return (
        <>
          <ambientLight intensity={0.7} />
          <pointLight castShadow position={[0, 0, 4]} intensity={0.1} />
          <pointLight castShadow position={[1, 0, 0]} intensity={1} color="#0000f3" />
          <pointLight castShadow position={[0, 0, -1]} intensity={1} color="#00f300" />
        </>
      )
    } else if (theme === "dark") {
      return (
        <>
          <ambientLight intensity={0.1} />
          <pointLight castShadow position={[0, 0, 4]} intensity={0.1} />
          <pointLight castShadow position={[1, 0, 0]} intensity={0.5} color="#0000f3" />
          <pointLight castShadow position={[0, 0, -1]} intensity={0.4} color="#00f300" />
        </>
      )
    }
  }
  return (
    <>
      <div className="w-full h-[30rem]">
        <Canvas shadows="variance">
          <PerspectiveCamera makeDefault position={[0, 1.5, 6.5]} fov={45} />
          <OrbitControls autoRotate autoRotateSpeed={0.12} enableZoom={false} />
          {handleLights()}
          <Suspense fallback={null}>
            <LoadedModel />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default RotateHouse
