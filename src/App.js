import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from "react-router-dom";
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import OfferDetailsScreen from './screens/OfferDetailsScreen'
import OfferAddScreen from "./screens/OfferAddScreen";

import Navbar from './components/Navbar';
import CopyWrites from './components/CopyWrites'
import Footer from './components/Footer'
import SocialPanel from './components/SocialPanel';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/offers/:id" element={<OfferDetailsScreen />} />
          <Route path="/offer-add" element={<OfferAddScreen />} />
        </Routes>
      </main>
      <CopyWrites />
      <SocialPanel />
      <Footer />
    </Router>
  );
}

export default App;
