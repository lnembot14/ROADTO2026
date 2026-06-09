import { useState } from "react"
import "./TournamentCard.css"

function TournamentCard({year, flag, host, champions, topScorer, runnerUp, goldenBall, finalScore, funFact}){

    const[isOpen, setIsOpen] = useState(false)

    
    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)} className="tournaments-box">
                <div className="card-header">
                    <h2> Year: {year} </h2>
                    <h2> {flag} </h2>
                    <h2> Host: {host} </h2>
                    <h2> Champions: {champions} </h2>
                </div>
            <div className="expanded-details">
                {isOpen && <p>Top Scorer {topScorer}</p> }
                {isOpen && <p>Runner-Up {runnerUp}</p> }
                {isOpen && <p>Golden Ball {goldenBall}</p> }
                {isOpen && <p>Final Score {finalScore}</p> }
            <div className="fun-fact">
                {isOpen && <p>Fun Fact {funFact}</p>}
            </div>
            </div>
            </div>
        </>
    )
}

export default TournamentCard