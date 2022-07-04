import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    onClick: () => any;
}
const Button: React.FC<Props> = ({ children, onClick }) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    gap: 3%;
    padding: 5px 10px;
    &:hover {
        opacity: 0.5;
        & > svg {
            opacity: 0.5;
        }
    }
`