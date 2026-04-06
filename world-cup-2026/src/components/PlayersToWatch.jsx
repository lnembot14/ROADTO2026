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
                <div className= "player-card" id="mbappe"> Kylian Mbappe </div>
            </Link>
            <Link to="/players/haaland">
                <div className= "player-card" id="haaland"> Erling Haaland </div>
            </Link>
            <Link to="/players/yamal">
                <div className= "player-card" id="yamal"> Lamine Yamal</div>
            </Link>
            <Link to="/players/messi">
                <div className= "player-card" id="messi"> Lionel Messi </div>
            </Link>
            <Link to="/players/kane">
                <div className= "player-card" id="kane"> Harry Kane </div>
            </Link>
            <Link to="/players/vincius">
                <div className= "player-card" id="vincius"> Vincius Junior </div>
            </Link>
        </div>
        </>
    )
}

export default PlayersToWatch