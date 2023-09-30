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
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login/login';
import PropertiesForm from './components/propertiesForm/propertiesForm';
import PropertiesImages from './components/propertiesForm/propertiesImages';
import DetailView from './pages/property-detail/detailView';
import AdminSite from './pages/dashboard';
import RouteWrapper from './routes';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <RouteWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
