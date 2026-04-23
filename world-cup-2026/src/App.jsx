import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PlayersToWatch from './components/PlayersToWatch'
import Stadiums from './components/Stadiums'
import HomePage from './components/HomePage'
import Timeline from './components/timeline';
import Cities from './components/Cities'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PlayersToWatch" element={<PlayersToWatch />} />
        <Route path="/Cities" element={< Cities />} />
        <Route path="/Stadiums" element={< Stadiums />} />
        <Route path="/Timeline" element={< Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
