import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Header Footer Layout
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Pages
import Home from './pages/Home'; 

// Full Website CSS Link
import './assets/css/style.css';
import './assets/css/mobile.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;