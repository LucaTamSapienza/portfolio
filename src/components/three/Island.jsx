import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Island(props, ref) {
  const { nodes, materials } = useGLTF('/models/sample.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Torus001.geometry} material={materials['Material.002']} position={[0.027, 0.022, -0.02]} />
      </group>
    )
}

useGLTF.preload('/models/sample.glb')