import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import MovieList from './Components/MoiveList/MoviesList'
import Login from './Components/Login/Login'
import Register from './Components/Login/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Api/PrivateRoute';
import Layout from './Layout';
import AboutUs from './Components/About/AboutUs'
import ContactUs from './Components/Contact/ContactUs'

export const App = () => {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="movielist" element={<MovieList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
