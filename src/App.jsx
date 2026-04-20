import { Routes, Route } from "react-router-dom";
import Loginone from "./pages/Loginone";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Loginone />} />
      </Routes>
    </>
  );
}
