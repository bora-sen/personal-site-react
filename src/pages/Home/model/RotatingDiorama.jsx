import React from 'react'
import gsap from 'gsap'
import { Power4 } from 'gsap'

import dioramaFile from './diorama.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'

function RotatingDiorama() {

  const LoadScene = useLoader(GLTFLoader,dioramaFile,obj => {
    //console.log(obj);
  });

  const diorama = LoadScene.scene;
  diorama.castShadow=true;
  diorama.recieveShadow=true;

  console.log(diorama);



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
      y:-1.3,
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