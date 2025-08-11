import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Storyfluence from './pages/InfluencerJourneys';
import Trending from './pages/Trending';
import Bidding from './pages/Bidding';
import AmplifyYourBrand from './pages/AmplifyYourBrand';
import ShareYourSpotlight from './pages/ShareYourSpotlight';
import InfluencerAcademy from './pages/InfluencerAcademy';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pablo from './articles/pablo';
import Sweta from './articles/sweta';
import Pankaj from './articles/pankaj';
import Neole from './articles/neole';
import Sohum from './articles/sohum';

import MicroInfluencerArticle from "./articles/riseOfMicro";
import InfluencerPowerMoves from "./articles/influencerPowerMoves";
import HowInfluencersAreChanging from './articles/howInfluencersAreChanging';
import BagYourFirstBigBrand from './articles/bagYourFirstBigBrand';
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/say-hello" element={<Contact />} />
            <Route path="/influencer-journeys" element={<Storyfluence />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/bidding" element={<Bidding />} />
            <Route path="/amplify-your-brand" element={<AmplifyYourBrand />} />
            <Route path="/share-your-spotlight" element={<ShareYourSpotlight />} />
            <Route path="/influencer-academy" element={<InfluencerAcademy />} />

            <Route path="/articles/pablo" element={<Pablo />} />
            <Route path="/articles/sweta" element={<Sweta />} />
            <Route path="/articles/pankaj" element={<Pankaj />} />
            <Route path="/articles/neole" element={<Neole />} />
            <Route path="/articles/sohum" element={<Sohum />} />

            <Route path="/articles/riseOfMicro" element={<MicroInfluencerArticle />} />
            <Route path="/articles/influencerPowerMoves" element={<InfluencerPowerMoves />} />
            <Route path="/articles/howInfluencersAreChanging" element={<HowInfluencersAreChanging />} />
            <Route path="/articles/bagYourFirstBigBrand" element={<BagYourFirstBigBrand />} />



          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
