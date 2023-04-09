import React from "react"
import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import dioramaFile from "./IBMPC.glb"

function LoadedModel() {
  const LoadedScene = useLoader(GLTFLoader, dioramaFile)
  const diorama = LoadedScene.scene

  return <primitive object={diorama} scale={1} position={[0, -1, 0]} rotation={[0, -0.4, 0]} />
}

export default LoadedModel
