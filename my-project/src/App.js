import logo from './logo.svg';
import './App.css';
import './index.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
//pages
import Header from './components/navbar'
import About from './pages/about.js'
import Home from './pages/home.js'
import Upload from './pages/submit_product.js'
import Dashboard from './pages/dashboard.js'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faWallet, faBars , faXmark} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
     
          <div className="Content  bg-background-color h-screen px-10 py-20">
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="upload" element={<Upload />} />
          </Routes>
          </div>
      </main>
    </BrowserRouter>
  );
}

export default App;