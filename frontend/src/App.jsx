import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import FQ from './Pages/FQ'
import OrderNow from './Pages/OrderNow'
import Navi from './Components/Navi'
import Footer from './Components/Footer'


function App() {

  return (
    <>
     <Router>
      <Navi/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/fq" element={<FQ />} />
          <Route path="/ordernow" element={<OrderNow />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
