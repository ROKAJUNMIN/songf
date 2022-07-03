import styled from "styled-components";
import FlexBox from "../components/atom/FlexBox";

const Home = () => {
    return (
        <Container>
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
