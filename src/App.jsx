import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import Login from './Components/Login/Login'
import Sigup from './Components/Login/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sigup/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
