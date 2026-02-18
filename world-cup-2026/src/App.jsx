import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Countdown from './components/countdown'
import Email from './components/email'
import Names from './components/names'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Countdown />
      <div className = "photo-gallery">
          <h2> FIFA World Cup: Through Picture</h2>
        </div>
      <Email />
      <Names />
    </>
  )
}

export default App
