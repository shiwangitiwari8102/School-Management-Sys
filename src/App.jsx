import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import SliderSection from './Components/SliderSection';
import About from './Components/About';
import Footer from './Components/Footer';
import Admission from './Components/Admission';
import Youtube from './Components/Youtube';
import Facilities from './Components/Facilities';

function App() {
  return (
   
      <div id="home">
        <Navbar />
        <SliderSection />
        <About />
       <Admission></Admission>
       <Youtube></Youtube>
       <Facilities></Facilities>
        <Footer />
      </div>
    
  );
}

export default App;
