import { Suspense } from 'react'
import styled from "styled-components";
import FlexBox from "../components/atom/FlexBox";
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
const Home = () => {
    const gltf = useLoader(GLTFLoader, './scene.gltf')
    return (
        <Container>
            <Canvas>
                <Suspense fallback={null}>
                    <OrbitControls/>
                    <ambientLight intensity={0.5}/>
                    <pointLight color="white" intensity={1} position={[10, 10, 10]} />
                    <primitive object={gltf.scene} scale={0.4}/>
                </Suspense>
            </Canvas>
            <FlexBox flexDirection="column">
                <h2>hi</h2>
            </FlexBox>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
