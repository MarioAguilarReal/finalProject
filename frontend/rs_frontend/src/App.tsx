import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import NewUsers from './pages/new-user/new_users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import PropertiesForm from './components/propertiesForm/propertiesForm';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/new-users' element= {<NewUsers/>}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/new-property' element= {<PropertiesForm />}/>
        </Routes>
      {/* <h1> Welcome to the Real Estate Website</h1> */}
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
