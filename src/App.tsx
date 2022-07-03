import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import FlexBox from "./components/atom/FlexBox";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
