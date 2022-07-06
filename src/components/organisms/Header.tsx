import Icons from "../atom/Icons";
import FlexBox from "../atom/FlexBox";
import { Home } from '@styled-icons/boxicons-regular/Home'
import { Stats } from '@styled-icons/boxicons-regular/Stats'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    return (
        <FlexBox
            flexDirection="horizontal"
            style={{
                width: "100%",
                height: "80px",
                border: "1px solid white",
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Icons >
                <Home color="white" size={50} onClick={() => navigate('/')} style={{ marginRight: '50px'}}/>
                <Stats color="white" size={50} onClick={() => navigate('/stats')}/>
            </Icons>
        </FlexBox>
    );
};

export default Header;
