import { Stars } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
const Background = () => {
    const ref = useRef<any>();

    useFrame(() => (ref.current.rotation.x += 0.005));  
      return (
        <Stars ref={ref}/>
    )
}

export default Background;