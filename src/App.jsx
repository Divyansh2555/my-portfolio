import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Skill from "./pages/Skills";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
   

     
      </Routes>
       <Footer/>

    </BrowserRouter>
  );
}

export default App;