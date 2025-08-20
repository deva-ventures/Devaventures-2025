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
import Indrani from './articles/indrani';
import Indrajit from './articles/indrajit';
import Sarina from './articles/sarina';
import Narender from './articles/narender';
import Sanjay from './articles/sanjay';
import Gunjan from './articles/gunjan';
import Avinash from './articles/avinash';
import Ragendu from './articles/ragendu';
import Raj from './articles/raj';
import Vaidehi from './articles/vaidehi';
import Jitender from './articles/jitender';
import Niranjan from './articles/niranjan';
import Sucheta from './articles/sucheta';
import Sadaf from './articles/sadaf';
import Harish from './articles/harish';






import MicroInfluencerArticle from "./articles/riseOfMicro";
import InfluencerPowerMoves from "./articles/influencerPowerMoves";
import HowInfluencersAreChanging from './articles/howInfluencersAreChanging';
import BagYourFirstBigBrand from './articles/bagYourFirstBigBrand';
import Devan from './articles/devan';
import Preetha from './articles/preetha';
import Aakash from './articles/aakash';
import Rohit from './articles/rohit';
import Jitesh from './articles/jitesh';
import Jayant from './articles/jayant';
import Akansha from './articles/akansha';
import Radhika from './articles/radhika';
import Nishant from './articles/nishant';
import Kshitij from './articles/Kshitij';
import Sinchu from './articles/sinchu';



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
            <Route path="/articles/indrani" element={<Indrani />} />
            <Route path="/articles/indrajit" element={<Indrajit />} />
            <Route path="/articles/sarina" element={<Sarina />} />
            <Route path="/articles/narender" element={<Narender />} />
            <Route path="/articles/sanjay" element={<Sanjay/>} />
            <Route path="/articles/gunjan" element={<Gunjan/>} />
            <Route path="/articles/avinash" element={<Avinash/>} />
            <Route path="/articles/ragendu" element={<Ragendu/>} />
            <Route path="/articles/raj" element={<Raj/>} />
            <Route path="/articles/vaidehi" element={<Vaidehi/>} />
            <Route path="/articles/jitender" element={<Jitender/>} />
            <Route path="/articles/niranjan" element={<Niranjan/>} />
            <Route path="/articles/sucheta" element={<Sucheta/>} />
            <Route path="/articles/sadaf" element={<Sadaf/>} />
            <Route path="/articles/harish" element={<Harish/>} />
            <Route path="/articles/devan" element={<Devan/>} />
            <Route path="/articles/preetha" element={<Preetha/>} />
            <Route path="/articles/aakash" element={<Aakash/>} />
            <Route path="/articles/rohit" element={<Rohit/>} />
            <Route path="/articles/jitesh" element={<Jitesh/>} />
            <Route path="/articles/jayant" element={<Jayant/>} />
            <Route path="/articles/akansha" element={<Akansha/>} />

            <Route path="/articles/radhika" element={<Radhika/>} />
            <Route path="/articles/nishant" element={<Nishant/>} />
            <Route path="/articles/kshitij" element={<Kshitij/>} />
            <Route path="/articles/sinchu" element={<Sinchu/>} />







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
