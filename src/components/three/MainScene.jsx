import React from 'react'
import {Island} from './Island'

import ScrollContainer from '../controls/ScrollContainer'
import ScrollCameraController from '../controls/ScrollCameraController'
import { useRef } from 'react'

const MainScene = () => {
  const islandRef = useRef();
  return (
    <ScrollContainer>
      {/* controllers */}
      <ScrollCameraController islandRef={islandRef} />


      {/* lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />


      {/* objects */}
      <Island ref={islandRef} />
    </ScrollContainer>
  )
}

export default MainScene