import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Footer from './components/footer';
import Home from './pages/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
        <Route path='/home' element= {<Home/>}/>
        </Routes>
      {/* <h1> Welcome to the Real Estate Website</h1> */}
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
