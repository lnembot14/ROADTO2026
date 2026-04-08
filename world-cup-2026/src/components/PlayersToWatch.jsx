import "./PlayersToWatch.css";
import { Link } from "react-router-dom";

function PlayersToWatch() {
    return (
        <>
        <div>
            <h2>Players to Watch</h2>
            <p>As the world gears up for the 2026 FIFA World Cup, fans and analysts alike are buzzing with excitement about the players to watch in this highly anticipated tournament. With a blend of seasoned veterans and emerging talents, the 2026 World Cup promises to showcase some of the best footballing skills on the global stage.</p>
        </div>
        <div className= "players-list">
            <Link to="/players/mbappe">
                <div className= "player-card" id="mbappe"> <p className = "rotated-text">Kylian Mbappe</p> </div>
            </Link>
            <Link to="/players/haaland">
                <div className= "player-card" id="haaland"> <p className = "rotated-text">Erling Haaland</p> </div>
            </Link>
            <Link to="/players/yamal">
                <div className= "player-card" id="yamal"> <p className = "rotated-text">Lamine Yamal</p></div>
            </Link>
            <Link to="/players/messi">
                <div className= "player-card" id="messi"> <p className = "rotated-text">Lionel Messi</p> </div>
            </Link>
            <Link to="/players/kane">
                <div className= "player-card" id="kane"> <p className = "rotated-text">Harry Kane</p> </div>
            </Link>
            <Link to="/players/vincius">
                <div className= "player-card" id="vincius"> <p className = "rotated-text">Vincius Junior</p> </div>
            </Link>
        </div>
        </>
    )
}

export default PlayersToWatch