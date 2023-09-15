import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1> Welcome to the Real Estate Website</h1>
      <Footer/>
    </div>
  );
}

export default App;
