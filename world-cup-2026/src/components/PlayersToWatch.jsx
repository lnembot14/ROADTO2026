import { useEffect, useState } from "react";
import Modal from "./Modal"
import "./PlayersToWatch.css";


const mbappe_image = "/images/mbappe(2)-img.jpg"
const haaland_image = "/images/haaland-img.jpg"
const yamal_image = "/images/yamal-img.jpg"
const messi_image = "/images/messi(1)-img.jpg"
const kane_image = "/images/kane(2)-img.avif"
const vincius_image = "/images/vini-img.jpg"

const players = [
    {
        player: "mbappe",
        country: "France",
        team : "Real Madrid",
        img : mbappe_image,
        position: "Forward",
        bio: "Most Dangerous Forward in the world..."
    },

    {
        player: "haaland",
        country: "Norway",
        team : "Manchester City",
        img : haaland_image,
        position: "Forward",
        bio: "The most devestating forward in the world"
    },

    {
        player: "yamal",
        country: "Spain",
        team : "Barcelona",
        img : yamal_image,
        position: "Forward",
        bio: "Teenage King"
    },

    {
        player: "Messi",
        country: "Argentina",
        team : "Inter Miami",
        img : messi_image,
        position: "Forward",
        bio: "The Greatest of All Time"
    },

    {
        player: "Kane",
        country: "England",
        team : "Bayern Munich",
        img : kane_image,
        position: "Forward",
        bio: "Best Striker in the World"
    },

    {
        player: "Vinicius",
        country: "Brazil",
        team : "Real Madrid",
        img : vincius_image,
        position: "Forward",
        bio: "Brazil's Main Man"
    },
]



function PlayersToWatch() {
    const [selectedPlayer, setSelectedPlayer] = useState(0)
    
    function handleClick(){
        setSelectedPlayer(selectedPlayer + 2)
    }

    const[playerStats, setPlayerStats] = useState(false)

    function showPlayerStats(){
        setPlayerStats(true)
    }

    return (
        <>
        <div className="intro">
            <h1>Players to Watch</h1>
            <p>As the world gears up for the 2026 FIFA World Cup, fans and analysts alike are buzzing with excitement about the players to watch in this highly anticipated tournament. With a blend of seasoned veterans and emerging talents, the 2026 World Cup promises to showcase some of the best footballing skills on the global stage.</p>
            <button onClick={handleClick}>Update</button>
            <p>Count: {selectedPlayer}</p>
        </div>
        <div className= "players-list">
            <button onClick={showPlayerStats}>
                <div className= "player-card" id="mbappe"> 
                <img src = {mbappe_image} alt="Kylian Mbappe" className= "player-image" /> <p className = "player-name">Kylian Mbappe</p> </div>
            </button>
            <button>
                <div className= "player-card" id="haaland"> \
                <img src = {haaland_image} alt="Erling Haaland" className= "player-image" /> <p className = "player-name">Erling Haaland</p> </div>
            </button>
            <button>
                <div className= "player-card" id="yamal"> 
                <img src = {yamal_image} alt="Lamine Yamal" className= "player-image" /> <p className = "player-name">Lamine Yamal</p></div>
            </button>
            <button>
                <div className= "player-card" id="messi"> 
                <img src = {messi_image} alt="Lionel Messi" className= "player-image" /> <p className = "player-name">Lionel Messi</p> </div>
            </button>
            <button>
                <div className= "player-card" id="kane"> 
                <img src = {kane_image} alt="Harry Kane" className= "player-image" /> <p className = "player-name">Harry Kane</p> </div>
            </button>
            <button>
                <div className= "player-card" id="vincius"> 
                <img src = {vincius_image} alt="Vincius Junior" className= "player-image" /> <p className = "player-name">Vincius Junior</p> </div>
            </button>
        </div>
        <Modal isOpen = {playerStats} />
        </>
    )
}

export default PlayersToWatch