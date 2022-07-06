import styled from 'styled-components'
import FlexBox from '../atom/FlexBox'
import { toggleAtom } from '../../atom';
import { useAtom } from 'jotai';
const Toggle = () => {
    const [active, setActive] = useAtom(toggleAtom)
         return (
        <FlexBox flexDirection='horizontal' style={{
            height: '20px',
            display: 'flex',
            borderRadius: '8px',
            border: '1px solid white',
            marginLeft: 'auto',
            marginBottom: '50px'
        }}>
            <ToggleButton name='feeling' onClick={() => setActive(true)} active={active}>Feeling</ToggleButton> 
            <ToggleButton name="favorite" onClick={() => setActive(false)} active={!active}>Favorite</ToggleButton> 
        </FlexBox>
    )
}

export default Toggle;



const ToggleButton = styled.button<{ active: boolean }>`
    color: ${({ active }) => active ? 'black' : 'white'};
    border-radius: 8px;
    width: 100%;
    background-color: ${({ active }) => active ? 'white' : 'transparent'};
    border: none;
    outline: none;

`