import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { Suspense, useContext } from 'react'
import { Canvas } from 'react-three-fiber'
import { ThemeContext } from '../../../context/ThemeContext'
import RotatingDiorama from '../model/RotatingDiorama'



function RotateHouse() {
  let theme = useContext(ThemeContext).Theme;

  function handleLights() {
    if(theme === "light"){
      return <ambientLight intensity={0.2} />
    }
    else if(theme === "dark"){
        return (
          <>
          <pointLight castShadow position={[0,0,4]} intensity={0.1} />
          <pointLight castShadow position={[0,0,5]} intensity={0.01} color="#0000f3" />
          <pointLight castShadow position={[7,6,0]} intensity={0.01} color="#00f300" />
        </>
      )
    }
  }
  return (
    <>
    <div className='w-full h-[35rem]'>
        <Canvas shadows="variance">
          <PerspectiveCamera makeDefault position={[0,1.5,6.5]} fov={40} />
        <OrbitControls autoRotate autoRotateSpeed={-0.12} enableZoom={false} />
            <Suspense fallback={null}>
              {handleLights()}
            <RotatingDiorama />
            </Suspense>
        </Canvas>
    </div>
    </>
  )
}

export default RotateHouse