import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Home from './pages/Home';
    import About from './pages/About';
    import Gallery from './pages/Gallery';
    import Contact from './pages/Contact';
    import Landscapes from './pages/Landscapes';
    import Portraits from './pages/Portraits';
    import Events from './pages/Events';
    import GeneralInquiry from './pages/GeneralInquiry';
    import Booking from './pages/Booking';
    import Support from './pages/Support';
    import Team from './pages/Team';
    import History from './pages/History';
    import Values from './pages/Values';

    function App() {
      return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery/landscapes" element={<Landscapes />} />
            <Route path="/gallery/portraits" element={<Portraits />} />
            <Route path="/gallery/events" element={<Events />} />
             <Route path="/contact/general" element={<GeneralInquiry />} />
            <Route path="/contact/booking" element={<Booking />} />
            <Route path="/contact/support" element={<Support />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/values" element={<Values />} />
          </Routes>
        </div>
      );
    }

    export default App;
