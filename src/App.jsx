import QR from "./QR/QRComponents/QR"
import Footer from "./commonComponents/Footer"
import Navbar from "./commonComponents/Navbar"
import NewsApp from "./newsApp/newsAppComponents/NewsApp"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Qoute from "./qoute/qouteComponents/Qoute"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/quote" element={<Qoute/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/qr" element= {<QR/>} />
        <Route path="/newsApp" element= {<NewsApp/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
