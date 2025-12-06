import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/Home'
import Cars from './pages/Cars'
// import Details from './pages/Details'
// import About from './pages/About'
// import Contact from './pages/Contact'
import CarDetails from "./pages/CarDetails";
import NotFound from './pages/NotFound';
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* Header commun à toutes les pages */}
      <Header />

      {/* Zone qui change selon l'URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/details" element={<Navigate to="/cars/1" replace />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
