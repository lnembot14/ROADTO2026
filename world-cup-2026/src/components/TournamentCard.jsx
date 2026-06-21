import { useState } from "react"
import "./TournamentCard.css"
import { Bold } from "lucide-react"

function TournamentCard({year, flag, host, champions, topScorer, runnerUp, goldenBall, finalScore, funFact}){

    const[isOpen, setIsOpen] = useState(false)

    
    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)} className="tournaments-box">
                <div className="card-header">
                    <h2>  {year} </h2>
                    <div className="detail-item">
                        <div className="detail-value">
                            <h2> {host} </h2>
                        </div>
                        <div className="detail-label">
                            <h2> {champions} </h2>
                        </div>
                    </div>
                </div>
            {isOpen && <div className="expanded-details">
                <div className="detail-item">
                    <div className="detail-label">
                        {<p>Top Scorer</p> }
                    </div>
                    <div className="detail-value">
                        {<p>{topScorer}</p> }
                    </div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">
                        {<p>Runner-Up</p> }
                    </div>
                    <div className="detail-value">
                        {<p>{runnerUp}</p> }
                    </div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">
                        {<p>Golden Ball</p> }
                    </div>
                    <div className="detail-value">
                        {<p>{goldenBall}</p> }
                    </div>
                </div>
                <div className="detail-item">
                    <div className="detail-label">
                        {<p>Final Score</p> }
                    </div>
                    <div className="detail-value">
                        {<p>{finalScore}</p> }
                    </div>
                </div>
                <div className="detail-item-fact">
                    <div className="detail-item">
                        {<p>Fun Fact</p>}
                    </div>
                    <div className="detail-value">
                        {<p>{funFact}</p>}
                    </div>
                </div>
            </div>}
            </div>
        </>
    )
}

export default TournamentCard