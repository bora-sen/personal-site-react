import gsap, { Power4 } from "gsap"
import React from "react"

import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import dioramaFile from "./IBMPC.glb"

function LoadedModel() {
  const LoadedScene = useLoader(GLTFLoader, dioramaFile)

  const diorama = LoadedScene.scene

  function IntroMove() {
    gsap.to(diorama.rotation, {
      x: 0,
      y: -0.5,
      z: 0,
      duration: 3,
      ease: Power4.easeOut,
    })
    gsap.to(diorama.position, {
      x: 0,
      y: -0.91,
      z: 0.14,
      duration: 2,
      ease: Power4.easeOut,
    })
  }
  IntroMove()

  return <primitive object={diorama} scale={1} position={[0.5, 0.2, 0]} rotation={[-0.4, -8, 0]} />
}

export default LoadedModel
