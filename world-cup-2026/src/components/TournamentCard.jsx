import { useState } from "react"
import "./TournamentCard.css"
import { Bold } from "lucide-react"

function TournamentCard({year, flag, host, champions, topScorer, runnerUp, goldenBall, finalScore, funFact}){

    const[isOpen, setIsOpen] = useState(false)

    
    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)} className="tournaments-box">
                <div className="card-header">
                    <h2> Year: {year} </h2>
                    <h2> Host: {host} </h2>
                    <h2> Champions: {champions} </h2>
                </div>
            {isOpen && <div className="expanded-details">
                <div className="detail-item">
                    {<p>Top Scorer</p> }
                    {<p>{topScorer}</p> }
                </div>
                <div className="detail-item">
                    {<p>Runner-Up</p> }
                    {<p>{runnerUp}</p> }
                </div>
                <div className="detail-item">
                    {<p>Golden Ball</p> }
                    {<p>{goldenBall}</p> }
                </div>
                <div className="detail-item">
                    <div className="detail-label">
                        {<p>Final Score</p> }
                    </div>
                    <div className="detail-value">
                        {<p>{finalScore}</p> }
                    </div>
                </div>
                <div className="detail-item">
                    {<p>Fun Fact</p>}
                    {<p>{funFact}</p>}
                </div>
            </div>}
            </div>
        </>
    )
}

export default TournamentCard