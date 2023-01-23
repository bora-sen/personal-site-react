import React from 'react'

import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'


import HomeObjFile from './home.obj'
import MaterialFile from './materials.mtl'
import { useLoader } from 'react-three-fiber'



function RotatingHome() {

    const myMaterials = useLoader(MTLLoader,MaterialFile);
    const loadObj = useLoader(OBJLoader,HomeObjFile,loadedObject => {
        myMaterials.preload()
        loadedObject.setMaterials(myMaterials);
        console.log(loadedObject);
        return loadedObject
    })



  return (
    <primitive object={loadObj} position={[0,0,-0.6]} rotation={[0,3.1,0]} />
  )
}

export default RotatingHome