'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import MainScene from './MainScene'

const MainCanvas = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        camera={{ position: [-5, 2, 5], fov: 50 }}
        style={{ background: 'skyblue' }}
      >
        <MainScene />
      </Canvas>
    </div>
  )
}

export default MainCanvas