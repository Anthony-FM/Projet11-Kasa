import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom'

//Mes pages
import Home from './pages/Home';
import Error from './pages/Error';
import FicheLogement from './pages/Logement';
import APropos from './pages/Apropos';
// Mes composants
import Header from './components/Header';
import Footer from './components/Footer';
// le style
import './utils/styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement/:id" element={<FicheLogement />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>

    </Router>
  </React.StrictMode>
);

// ****************************************