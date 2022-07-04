import styled from "styled-components";
import FlexBox from "../components/atom/FlexBox";
import Menu from "../components/organisms/Menu";
import { Canvas } from '@react-three/fiber'
import {  Stars, OrbitControls } from '@react-three/drei'
const Home = () => {
 
    return (
        <Container>
            <Canvas>
                <OrbitControls/>
                <Stars/>
            </Canvas>
            <FlexBox flexDirection="column" style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                }}>
                <Menu/> 
            </FlexBox>
            </Container>
    );
};

export default Home;

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
