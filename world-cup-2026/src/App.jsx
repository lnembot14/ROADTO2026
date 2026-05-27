import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PlayersToWatch from './components/PlayersToWatch'
import Stadiums from './components/Stadiums'
import HomePage from './components/HomePage'
import Cities from './components/Cities'
import HistoryPage from "./components/HistoryPage"
import Navbar from './components/navbar'

function App() {
  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PlayersToWatch" element={<PlayersToWatch />} />
        <Route path="/Cities" element={< Cities />} />
        <Route path="/Stadiums" element={< Stadiums />} />
        <Route path="/HistoryPage" element={< HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
