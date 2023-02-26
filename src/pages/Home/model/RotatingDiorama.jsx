import React from 'react'
import gsap from 'gsap'
import { Power4 } from 'gsap'

import dioramaFile from './IBMPC.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'

function RotatingDiorama() {

  const LoadScene = useLoader(GLTFLoader,dioramaFile);

  const diorama = LoadScene.scene;
  diorama.castShadow=true;
  diorama.recieveShadow=true;

  function IntroMove(){
    gsap.to(diorama.rotation,{
      x:0,
      y:-0.5,
      z:0,
      duration:3,
      ease:Power4.easeOut
    })
    gsap.to(diorama.position,{
      x:0,
      y:-0.91,
      z:0.14,
      duration:2,
      ease:Power4.easeOut
    })

  }
  IntroMove();

  return (
    <primitive object={diorama} scale={1} position={[0.5,0.2,0]} rotation={[-0.4,-8,0]} />
  )
}

export default RotatingDiorama