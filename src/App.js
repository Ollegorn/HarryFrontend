import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Tournaments from './components/pages/Tournaments';
import Admins from './components/pages/Admins';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/tournaments' Component={Tournaments} />
          <Route path='/sign-up' Component={SignUp} />
          <Route path='/admins' Component={Admins} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
