import React from 'react'
import { ScrollControls } from '@react-three/drei'

const ScrollContainer = ({ children }) => {
  return (
    <ScrollControls pages={6} damping={0.1}>
        {/* devo crearla nel componente padre altrimenti non posso accedere alla ref da dentro ScrollContainer */}
        {/* <ScrollCameraController islandRef={islandRef} /> */}
        {children}
    </ScrollControls>
  )
}

export default ScrollContainer