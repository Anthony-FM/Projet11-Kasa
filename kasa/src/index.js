import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
// Mes pages
import Home from './pages/Home';
import Error from './pages/Error';
import FicheLogement from './pages/Logement';
import APropos from './pages/Apropos';
// Mes composants
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', Helvetica, sans-serif;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Error />} />
      </Routes>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// ****************************************