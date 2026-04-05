import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Countdown from './components/countdown'
import Email from './components/email'
import Gallery from './components/gallery'

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Countdown />
            <Email />
            <Gallery />
        </div>
    );
}

export default App;