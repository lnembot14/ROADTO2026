import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
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
        player: "Kylian Mbappe",
        country: "France",
        team : "Real Madrid",
        description: "A world-class forward known for his explosive pace, sharp finishing, and ability to create danger from almost anywhere on the pitch. Mbappé is especially dangerous in transition, using his speed and movement to break defensive lines and score in big moments.",
        img : mbappe_image,
        position: "Striker",
        bio: '"Dictator"',
        matches: 43,
        goals: 41,
        assists: 7
    },

    {
        player: "Erling Haaland",
        country: "Norway",
        team : "Manchester City",
        description: "A dominant striker known for his power, positioning, and elite goal-scoring instincts. Haaland thrives inside the box, using his strength, speed, and clinical finishing to punish defenses and consistently score goals.",
        img : haaland_image,
        position: "Striker",
        bio: '"The Terminator"',
        matches: 52,
        goals: 38,
        assists: 9
    },

    {
        player: "Lamine Yamal",
        country: "Spain",
        team : "Barcelona",
        description: "Football's most exciting young talent, Yamal is a creative winger with quick feet, excellent dribbling, and strong decision-making for his age. He is known for taking on defenders, creating chances, and bringing flair to the attack.",
        img : yamal_image,
        position: "Winger",
        bio: '"Teenage King"',
        matches: 45,
        goals: 24,
        assists: 18
    },

    {
        player: "Lionel Messi",
        country: "Argentina",
        team : "Inter Miami",
        description: "One of the greatest players in football history, Messi is known for his magical dribbling, vision, passing, and finishing. He can control the tempo of a game, create chances for teammates, and score with incredible precision.",
        img : messi_image,
        position: "Forward",
        bio: '"The G.O.A.T."',
        matches: 15,
        goals: 13,
        assists: 5
    },

    {
        player: "Harry Kane",
        country: "England",
        team : "Bayern Munich",
        description: "A complete striker known for his intelligent movement, finishing ability, and playmaking from deeper positions. Kane is not only a reliable goal scorer but also excellent at linking play and creating opportunities for teammates.",
        img : kane_image,
        position: "Striker",
        bio: '"Mr. Golden Boot"',
        matches: 50,
        goals: 58,
        assists: 7
    },

    {
        player: "Vinicius Junior",
        country: "Brazil",
        team : "Real Madrid",
        description: "An electric winger known for his speed, dribbling, creativity, and confidence in one-on-one situations. Vinícius Jr. constantly challenges defenders, creates attacking chances, and brings energy and flair to the left side of the pitch.",
        img : vincius_image,
        position: "Winger",
        bio: '"Baila Vini!"',
        matches: 53,
        goals: 22,
        assists: 14
    }
]



function PlayersToWatch() {

    const[selectedPlayer, setSelectedPlayer] = useState(null)

    return (
        <>
        <div className="intro">
            <h1>Players to Watch</h1>
            <p>As the world gears up for the 2026 FIFA World Cup, fans and analysts alike are buzzing with excitement about the players to watch in this highly anticipated tournament. With a blend of seasoned veterans and emerging talents, the 2026 World Cup promises to showcase some of the best footballing skills on the global stage.</p>
            <Link to="/Homepage.jsx" className="players-tw-button">HomePage</Link>
        </div>
        <div className= "players-list">
            <button className="player-button" onClick={()=>setSelectedPlayer(players[0])}>
                <div className= "player-card" id="mbappe"> 
                <img src = {mbappe_image} alt="Kylian Mbappe" className= "player-image" /> <p className = "player-name">Kylian Mbappe</p> </div>
            </button>
            <button className="player-button" onClick={()=>setSelectedPlayer(players[1])}>
                <div className= "player-card" id="haaland">
                <img src = {haaland_image} alt="Erling Haaland" className= "player-image" /> <p className = "player-name">Erling Haaland</p> </div>
            </button>
            <button className="player-button" onClick = {()=>setSelectedPlayer(players[2])}>
                <div className= "player-card" id="yamal"> 
                <img src = {yamal_image} alt="Lamine Yamal" className= "player-image" /> <p className = "player-name">Lamine Yamal</p></div>
            </button>
            <button className="player-button" onClick = {()=>setSelectedPlayer(players[3])}>
                <div className= "player-card" id="messi"> 
                <img src = {messi_image} alt="Lionel Messi" className= "player-image" /> <p className = "player-name">Lionel Messi</p> </div>
            </button>
            <button className="player-button" onClick={()=> setSelectedPlayer(players[4])}>
                <div className= "player-card" id="kane"> 
                <img src = {kane_image} alt="Harry Kane" className= "player-image" /> <p className = "player-name">Harry Kane</p> </div>
            </button>
            <button className="player-button" onClick={()=> setSelectedPlayer(players[5])}>
                <div className= "player-card" id="vincius"> 
                <img src = {vincius_image} alt="Vincius Junior" className= "player-image" /> <p className = "player-name">Vincius Junior</p> </div>
            </button>
        </div>
        <Modal isOpen = {selectedPlayer !== null}  player={selectedPlayer} onClose= {()=> setSelectedPlayer(null)}/>
        </>
    )
}

export default PlayersToWatch