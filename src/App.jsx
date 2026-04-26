import { Routes, Route } from "react-router-dom";
import Loginone from "./pages/Loginone";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import LoginDoctor from "./pages/LoginDoctor";
import AccPatient from "./pages/AccPatient";
import BookOne from "./pages/Book/BookOne";
// import BookTwo from "./pages/Book/BookTwo";
import BookThree from "./pages/Book/BookThree";
import BookFour from "./pages/Book/BookFour";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginone />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/loginDoctor" element={<LoginDoctor />} />
        <Route path="/accPatient" element={<AccPatient />} />
        <Route path="/bookOne" element={<BookOne />} />
        {/* <Route path="/bookTwo" element={<BookTwo />} /> */}
        <Route path="/bookThree" element={<BookThree />} />
        <Route path="/bookFour" element={<BookFour />} />
      </Routes>
    </>
  );
}
