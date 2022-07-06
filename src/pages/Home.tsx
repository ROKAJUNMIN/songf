import styled from "styled-components";
import { useState } from 'react'
import FlexBox from "../components/atom/FlexBox";
import Menu from "../components/organisms/Menu";
import { Canvas } from '@react-three/fiber'
import Background from "../components/atom/Background";
import { BottomSheet } from 'react-spring-bottom-sheet'
import Button from '../components/atom/Button'
import 'react-spring-bottom-sheet/dist/style.css'

const Home = () => {
    const [open, setOpen] = useState(false)
    return (
        <Container>
            <Canvas>
                <Background/>
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
            <FlexBox flexDirection="column" style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button onClick={() => {
                    setOpen(true)
                }}>Contact</Button>
                <BottomSheet open={open}>
                    hahahaha
                </BottomSheet>  
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
