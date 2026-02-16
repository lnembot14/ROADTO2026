import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <div className = "countdown">
                <h2>Countdown to the #FIFA2026 World Cup</h2>
                <p>Clock: 20:00:00</p>
        <p className ="paragraph">A live countdown from any where, at any time, in any place to remind you how close we
            are to the 2026 World Cup!
        </p>
      </div>

        <div className = "photo-gallery">
            <h2> FIFA World Cup: Through Picture</h2>
        </div>


    </>
  )
}

export default App
