import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stat from "./pages/Stat";
import Home from "./pages/Home";
import Header from './components/organisms/Header'
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stats" element={<Stat/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

