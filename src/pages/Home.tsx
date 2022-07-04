import styled from "styled-components";
import FlexBox from "../components/atom/FlexBox";
import Menu from "../components/organisms/Menu";

const Home = () => {
    return (
        <Container>
            <FlexBox flexDirection="column" style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
           
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
`;
