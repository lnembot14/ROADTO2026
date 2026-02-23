import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Countdown from './components/countdown'
import Email from './components/email'
import Names from './components/names'
import Gallery from './components/gallery'

function App() {
  return (
      <div className="App"> 
        <Header />
        <Navbar />
        <Countdown targetMS={new Date("2026-06-11T00:00:00").getTime()}/>
        <Gallery />
        <Email />
        <Names />
      </div>
  );
}

export default App
