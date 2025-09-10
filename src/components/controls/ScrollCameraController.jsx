import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const ScrollCameraController = ({ islandRef }) => {
  const scroll = useScroll()

  useFrame(() => {
    if (islandRef.current) {
      // Ruota l'isola in base allo scroll verticale
      islandRef.current.rotation.y = scroll.offset * Math.PI * 2
    }
  })

  return null
}

export default ScrollCameraController