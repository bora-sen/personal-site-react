import { Html, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import React, { Suspense, useContext } from 'react'
import { Canvas } from 'react-three-fiber'
import { ThemeContext } from '../../../context/ThemeContext'
import RotatingDiorama from '../model/RotatingDiorama'


function LoadingSpinner(){
  const {progress} = useProgress();
  return (
    <Html center>
      <div className='text-2xl font-extrabold font-poppins flex flex-col items-center justify-center'>
        <h2>Loading..</h2>
        <h3>{progress}%</h3>
      </div>
    </Html>
  )
}

function RotateHouse() {
  let theme = useContext(ThemeContext).Theme;

  function handleLights() {
    if(theme === "light"){
      return (
        <>
          <ambientLight intensity={0.7} />
          <pointLight castShadow position={[0,0,4]} intensity={0.1} />
          <pointLight castShadow position={[1,0,0]} intensity={1} color="#0000f3" />
          <pointLight castShadow position={[0,0,-1]} intensity={1} color="#00f300" />
        </>
      )
      
    }
    else if(theme === "dark"){
        return (
          <>
          <ambientLight intensity={0.1}/>
          <pointLight castShadow position={[0,0,4]} intensity={0.1} />
          <pointLight castShadow position={[1,0,0]} intensity={0.5} color="#0000f3" />
          <pointLight castShadow position={[0,0,-1]} intensity={0.4} color="#00f300" />
        </>
      )
    }
  }
  return (
    <>
    <div className='w-full h-[27rem]'>
        <Canvas shadows="variance">
          <PerspectiveCamera makeDefault position={[0,1.5,6.5]} fov={40} />
        <OrbitControls autoRotate autoRotateSpeed={-0.12} enableZoom={false} />
            <Suspense fallback={<LoadingSpinner />}>
              {handleLights()}
            <RotatingDiorama />
            </Suspense>
        </Canvas>
    </div>
    </>
  )
}

export default RotateHouse