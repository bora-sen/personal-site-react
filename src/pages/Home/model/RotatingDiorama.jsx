import { useGLTF } from '@react-three/drei'
import React from 'react'
import gsap from 'gsap'
import { Power4 } from 'gsap'

import dioramaFile from './diorama.glb'

function RotatingDiorama() {

  const LoadScene = useGLTF(dioramaFile)
  const diorama = LoadScene.scene;
  diorama.castShadow=true;
  console.log(LoadScene);


  function IntroMove(){
    gsap.to(diorama.rotation,{
      x:0,
      y:-1.4,
      z:0,
      duration:3,
      ease:Power4.easeOut
    })
    gsap.to(diorama.position,{
      x:0.4,
      y:-1,
      z:0,
      duration:2,
      ease:Power4.easeOut
    })

  }
  IntroMove();



  return (
    <primitive object={diorama} scale={0.05} position={[1.2,-5,0]} rotation={[-1.3,-1.4,0]} />
  )
}

export default RotatingDiorama