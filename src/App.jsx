import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skill from "./pages/Skills";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;