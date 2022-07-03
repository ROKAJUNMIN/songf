import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    style?: React.CSSProperties
}
const Icons: React.FC<Props> = ({ children, style }) => {
    return (
        <Container style={style}>
            {children}
        </Container>
    )
}

export default Icons

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    & > svg {
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    }
`