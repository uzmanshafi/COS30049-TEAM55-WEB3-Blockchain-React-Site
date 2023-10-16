import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

//pages
import Header from './components/navbar'
import Footer from './components/footer'
import About from './pages/about.js'
import Home from './pages/home.js'
import Upload from './pages/submit_product.js'
import Dashboard from './pages/dashboard.js'
import Product from './pages/product.js'
import Login from './pages/login.js'
import FetchData from './components/FetchData.js'
import ProductsPage from './pages/productspage.js';
import SearchProduct from './pages/search_product.js'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col">
        <Header isLoggedIn={isLoggedIn} userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
        <div className="Content bg-background-color flex-grow w-full px-10 py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="upload" element={<Upload />} />
            <Route path="product" element={<Product />} />
            <Route path="productspage" element={<ProductsPage />} />
            <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />} />
            <Route path="fetchdata" element={<FetchData />} />
            <Route path ="search" element={<SearchProduct />}/>
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
