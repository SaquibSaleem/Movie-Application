import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment these routes as needed */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
