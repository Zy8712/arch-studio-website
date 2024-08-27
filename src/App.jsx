import { Router, Route } from 'wouter';

import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer';

import './App.css'

export default function App() {

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

