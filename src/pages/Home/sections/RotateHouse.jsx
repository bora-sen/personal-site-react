import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { Suspense, useContext } from 'react'
import { Canvas } from 'react-three-fiber'
import { ThemeContext } from '../../../context/ThemeContext'
import { ProfileImage } from '../assets'

import RotatingHome from '../model/RotatingHome'



function RotateHouse() {
  let theme = useContext(ThemeContext).Theme;

  function handleLights() {
    if(theme === "light"){
      return <ambientLight intensity={0.8} />
    }
    else if(theme === "dark"){
        return (
          <>
          <pointLight castShadow position={[0,0,4]} intensity={0.4} />
          <pointLight castShadow position={[0,0,5]} intensity={0.3} color="#0000f8" />
          <pointLight castShadow position={[7,6,0]} intensity={0.2} color="#ff0000" />
        </>
      )
    }
  }

  return (
    <>


    <div className='w-full h-[35rem]'>

        <Canvas>
          <PerspectiveCamera makeDefault position={[0,0,6.5]} fov={50} />
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
            <Suspense fallback={null}>
              {handleLights()}
            <RotatingHome />
            </Suspense>
        </Canvas>
        <div className='relative z-10 -top-20 flex justify-center'>
        <div className='backdrop-blur-sm backdrop-brightness-75 dark:backdrop-brightness-200 text-white p-2 rounded-md flex items-center gap-2'>
          <img src={ProfileImage} className="w-12 h-12 rounded-full"/>
          <span className='font-poppins'>Solve real life problems with code</span>
          

        </div>
      </div>

    </div>
    </>
  )
}

export default RotateHouse