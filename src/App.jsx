import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Gallery Page */}
        <Route
          path="/gallery"
          element={<Gallery />}
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Booking Page */}
        <Route
          path="/booking"
          element={<Booking />}
        />

      </Routes>
    </>
  );
}

export default App;