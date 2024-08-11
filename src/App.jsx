import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import About  from './Components/About/AboutUs'
import Contact from './Components/Contact/ContactUs'
import MovieList from './Components/MoiveList/MoviesList'
import Login from './Components/Login/Login'
import Register from './Components/Login/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movielist" element={<MovieList />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
