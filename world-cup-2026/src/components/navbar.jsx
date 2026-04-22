import { Link } from "react-router-dom"

function Navbar(){
    return (
        <div className ="navbar">
    <ul>
        <li><Link to="/Cities">Cities </Link></li>
        <li><Link to ="/Stadiums">Stadiums </Link></li>
        <li><Link to ="/Timeline">Timeline</Link></li>
        <li><Link to ="/PlayersToWatch">Players</Link></li>
        <li><button id="theme-button" >Toggle Mode</button></li>
        </ul>
    </div>
    
    )
}

export default Navbar