import React from "react";
import styled from "styled-components";

interface Props {
    flexDirection: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
const FlexBox: React.FC<Props> = ({ children, flexDirection, style }) => {
    return (
        <Container style={style} flexDirection={flexDirection}>
            {children}
        </Container>
    );
};

const Container = styled.div<{
    flexDirection: string;
}>`
    display: flex;
    flex-direction: flexDirection;
`;

export default FlexBox;
