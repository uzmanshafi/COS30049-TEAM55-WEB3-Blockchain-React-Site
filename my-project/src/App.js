import logo from './logo.svg';
import './App.css';
import './index.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
//pages
import Header from './components/navbar'
import Footer from './components/footer'
import About from './pages/about.js'
import Home from './pages/home.js'
import Upload from './pages/submit_product.js'
import Dashboard from './pages/dashboard.js'
import Product from './pages/product';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faWallet, faBars , faXmark} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="Content bg-background-color flex-grow w-full px-10 py-20">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="upload" element={<Upload />} />
            <Route path="product" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;