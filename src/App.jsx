import React, { useEffect, useState } from 'react';
import { Router, Route } from 'wouter';

import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer';

import './App.css'

export default function App() {

  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    fetch('/api/verify')
      .then(response => {
        if (response.status === 200) {
          setAccessGranted(true);
        } else {
          setAccessGranted(false);
        }
      })
      .catch(() => setAccessGranted(false));
  }, []);

  if (!accessGranted) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }

  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </>
  )
}

