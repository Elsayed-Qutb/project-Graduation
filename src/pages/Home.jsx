import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import Hero from '../components/Hero'
import Specialities from '../components/Specialities'
import About from '../components/About'
import Finddoctor from '../components/Finddoctor'
import Footer from '../components/Footer';

export default function Home() {
    const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Specialities></Specialities>
      <Finddoctor></Finddoctor>
      <About></About>
      <Footer></Footer>
    </div>
  )
}
