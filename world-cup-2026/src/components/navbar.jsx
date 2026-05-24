import { Link } from "react-router-dom"

function Navbar(){
    return (
        <div className ="navbar">
    <ul>
        <li><Link to="/Cities">Cities </Link></li>
        <li><Link to ="/Stadiums">Stadiums </Link></li>
        <li><Link to ="/HistoryPage">Timeline</Link></li>
        <li><Link to ="/PlayersToWatch">Players</Link></li>
        </ul>
    </div>
    
    )
}

export default Navbar