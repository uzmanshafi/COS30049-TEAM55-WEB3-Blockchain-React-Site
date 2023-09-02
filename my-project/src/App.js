import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './components/header'
import About from './pages/about.js'
import Home from './pages/home.js'
import Upload from './pages/submit_product.js'
import Dashboard from './pages/dashboard.js'
import Product from './pages/product.js'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/submit_product" component={Upload} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/product" component={Product} />
    </Router>
  );
}

export default App;
