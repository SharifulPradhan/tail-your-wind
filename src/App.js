import './App.css';
import NavBar from './containers/NavBar';
import HeroSection from './containers/HeroSection';
import Services from './containers/Services';
import Aboutus from './containers/Aboutus';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

function App() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <Services />
    <Aboutus />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
