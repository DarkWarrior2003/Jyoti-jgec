import "./App.css";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Forms from "./components/Contact/Forms";
import Team from "./components/Team/Team";
import Album from "./components/Gallery/Album";
import Loader from "./components/Loader";
import GoToTop from "./components/GoToTop";
import Supportus from "./components/Support/Supportus";
import Notice from "./components/Notice/Notice";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Album />} />
        <Route path="/support" element={<Supportus />} />
        <Route path="/notice" element={<Notice/>} />
      </Routes>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
