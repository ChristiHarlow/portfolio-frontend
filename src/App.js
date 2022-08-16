import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Project from "./Project";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<Project />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
