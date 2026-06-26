import { Routes, Route } from "react-router-dom";


import Navber from "./Commponents/Navber";
import Footer from "./Commponents/Footer"

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ServiceDetails from "./Pages/ServiceDetails";
import Packages from "./Pages/Packages";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import BookNow from "./Pages/BookNow";

function App() {

  return (
    <>
      
      <Navber />

      
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route
            path="/services/:slug/:duration"
            element={<ServiceDetails />}
          />

          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
      </main>

     
      <Footer />
    </>
  );
}

export default App;