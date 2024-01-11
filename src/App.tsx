import { Home, Result } from "./page";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
        </Routes>
    );
}
