import { Routes, Route } from "react-router-dom";
import Loginone from "./pages/Loginone";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import LoginDoctor from "./pages/LoginDoctor";
import AccPatient from "./pages/AccPatient";
import BookOne from "./pages/Book/BookOne";
import BookThree from "./pages/Book/BookThree";
import BookFour from "./pages/Book/BookFour";
import SpecialtiesList from "./pages/SpecialtiesList";
import GeneralPractice from "./pages/specialities/GeneralPractice";
import Dentistry from "./pages/specialities/Dentistry";
import Dermatology from "./pages/specialities/Dermatology";
import Gynecology from "./pages/specialities/Gynecology";
import Pediatrics from "./pages/specialities/Pediatrics";
import Orthopedics from "./pages/specialities/Orthopedics";
import Cardiology from "./pages/specialities/Cardiology";
import Psychiatry from "./pages/specialities/Psychiatry";
import Ophthalmology from "./pages/specialities/Ophthalmology";
import Endocrinology from "./pages/specialities/Endocrinology";
import Nephrology from "./pages/specialities/Nephrology";
import Neurology from "./pages/specialities/Neurology";
import Otolaryngology from "./pages/specialities/Otolaryngology";
import PlasticSurgery from "./pages/specialities/PlasticSurgery";
import PhysicalTherapy from "./pages/specialities/PhysicalTherapy";
import Doctorslist from "./components/Doctorslist";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Loginone />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/loginDoctor" element={<LoginDoctor />} />
      <Route path="/accPatient" element={<AccPatient />} />
      <Route path="/bookOne" element={<BookOne />} />
      <Route path="/bookThree" element={<BookThree />} />
      <Route path="/bookFour" element={<BookFour />} />
      <Route path="/specialtiesList" element={<SpecialtiesList />} />
      <Route path="/generalPractice" element={<GeneralPractice />} />
      <Route path="/dentistry" element={<Dentistry />} />
      <Route path = "/dermatology" element = {<Dermatology/>} />
      <Route path = "/gynecology" element = {<Gynecology/>} />
      <Route path = "/pediatrics" element = {<Pediatrics/>} />
      <Route path = "/orthopedics" element = {<Orthopedics/>} />
      <Route path = "/cardiology" element = {<Cardiology/>} />
      <Route path = "/psychiatry" element = {<Psychiatry/>} />
      <Route path = "/ophthalmology" element = {<Ophthalmology/>} />
      <Route path = "/endocrinology" element = {<Endocrinology/>} />
      <Route path = "/nephrology" element = {<Nephrology/>} />
      <Route path = "/neurology" element = {<Neurology/>} />
      <Route path = "/otolaryngology" element = {<Otolaryngology/>} />
      <Route path = "/plastic-surgery" element = {<PlasticSurgery/>} />
      <Route path = "/physical-therapy" element = {<PhysicalTherapy/>} />
      <Route path = "doctors-list" element = {<Doctorslist/>}/>

    </Routes>
  );
}