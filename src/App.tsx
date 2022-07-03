import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import FlexBox from "./components/atom/FlexBox";
import Home from "./pages/Home";
import Header from './components/organisms/Header'
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

