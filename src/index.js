import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './pages/Navigation';
import SignUp from './pages/Signup';
import AboutUs from './pages/Aboutus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
