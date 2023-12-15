import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Program from './pages/Program';
import News from './pages/News';
import NoPage from './pages/NoPage';
import Header1 from './pages/Header';
import Footer from './pages/Footer';
import Admin from './pages/Admin';
import MyList from './pages/MyList';
import Maps from './pages/Maps';
import Gallery from './pages/Gallery';
import FantasyQuest from './pages/FantasyQuest';
import TextPage from './pages/TextPage';
import Tickets from './pages/Tickets';
import DanskFantasyPris from './pages/DanskFantasyPris';
import GuestsOfHonour from './pages/GuestsOfHonour';

export default function App() {
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="program" element={<Program />} />
          <Route path="nyheder" element={<News />} />
          <Route path="admin" element={<Admin />} />
          <Route path="min-liste" element={<MyList />} />
          <Route path="markedsplads" element={<Maps />} />
          <Route path="billeder-fra-fantasyfestival-21" element={<Gallery year={2021} />} />
          <Route path="billeder-fra-fantasyfestival-22" element={<Gallery year={2022} />} />
          <Route path="fantasy-quest" element={<FantasyQuest />} />
          <Route path="the-fantasy-fellowship" element={<TextPage page="fantasyFellowship" />} />
          <Route path="sociale-medier" element={<TextPage page="socialMedia" />} />
          <Route path="om-fantasyfestivalen" element={<TextPage page="about" />} />
          <Route path="hvordan-begyndte-fantasyfestival" element={<TextPage page="beginningOfFantasyfestival" />} />
          <Route path="standholdere-og-annoncoerer" element={<TextPage page="marketBooking" />} />
          <Route path="kunstnerhjoernet" element={<TextPage page="kunstnerhjørnet" />} />
          <Route path="messe" element={<TextPage page="messe" />} />
          <Route path="billetter" element={<Tickets />} />
          <Route path="dansk-fantasy-pris" element={<DanskFantasyPris />} />
          <Route path="guests-of-honour" element={<GuestsOfHonour />} />
          <Route path="praktisk-info/">
            <Route path="ean-og-cvrnumre" element={<TextPage page="EAN" />} />
            <Route path="FAQ" element={<TextPage page="FAQ" />} />
            <Route path="praktikanter" element={<TextPage page="internship" />} />
            <Route path="sponsorer-og-samarbejdspartnere" element={<TextPage page="sponsers" />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
