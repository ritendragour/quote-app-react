import Card from "./components/Card"
import Navbar from "./components/Navbar"
import { QuoteProvider } from "./context/QuoteContext"

function App() {
  return (
    <QuoteProvider>
    <Navbar/>
    <div className="container mt-5">
    <Card/>
    </div>
    </QuoteProvider>
  )
}

export default App
