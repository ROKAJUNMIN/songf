import FlexBox from "../atom/FlexBox";

const Header = () => {
    return (
        <FlexBox
            flexDirection="horizontal"
            style={{
                width: "100%",
                height: "80px",
                border: "1px solid white",
            }}
        >
            <h2>hi</h2>
        </FlexBox>
    );
};

export default Header;
