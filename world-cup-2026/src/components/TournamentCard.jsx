import { useState } from "react"
import "./TournamentCard.css"

function TournamentCard({year, flag, host, champions, topScorer, runnerUp, goldenBall, finalScore, funFact}){

    const[isOpen, setIsOpen] = useState(false)

    
    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)} className="tournaments-box">
                <h2> {year} </h2>
                <h2> {flag} </h2>
                <h2> {host} </h2>
                <h2> {champions} </h2>
                {isOpen && <p>Top Scorer {topScorer}</p> }
                {isOpen && <p>Runner-Up {runnerUp}</p> }
                {isOpen && <p>Golden Ball {goldenBall}</p> }
                {isOpen && <p>Final Score {finalScore}</p> }
                {isOpen && <p>Fun Fact {funFact}</p>}
            </div>
        </>
    )
}

export default TournamentCard