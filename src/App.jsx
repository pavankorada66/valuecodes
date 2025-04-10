import React from 'react';
import Navbar from './components/Navbar';
import Displays from './components/Displays';
import Services from './components/Services';
import HeroCard from './components/HeroCard';
import Valuesection from './components/Valuesection';
import Developerscard from './components/Developerscard';
import Solutions from './components/Solutions';
import Quries from './components/Quries';
import CustomerFeedback from './components/CustomerFeedback';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Displays />
      <div id="services"><Services /></div>
      <HeroCard />
      <Valuesection />
      <div id="softwares"><Developerscard /></div>
      <div id="solutions"><Solutions /></div>
      <Quries />
      <div id="company"><CustomerFeedback /></div>
      <div id="getstarted"><ContactForm /></div>
      <Footer />
    </div>
  );
}

export default App;
