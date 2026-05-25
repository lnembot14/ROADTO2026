import { tournaments } from "../data/tournaments"
import  StatCard  from "./StatCard"
import { GoTrophy } from "react-icons/go";
import { PiSoccerBall } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa";

import "./StatCard.css"

function HistoryPage() {

    return(
        <>
            <div>
                <h1>World Cup History</h1>
                <p>Every tournament from 1930 to 2022 — champions, records, and the moments that defined the game.</p>
            </div>


            <div className="row-of-cards">
                <StatCard icon= {<GoTrophy />} value="Brazil" label="Most titles" subtext="5 championships" />
                <StatCard icon= {<PiSoccerBall />} value="Miroslav Klose" label="Top Scorer" subtext="16 goals" />
                <StatCard icon= {<CiCalendar />} value={tournaments.length} label="Tournaments" subtext="1930-2022" />
                <StatCard icon= {<FaRegFlag />} value="80+" label="Nations Competed" subtext="across all editions" />
            </div>

            <ul>
                {tournaments.map(tournament=>(
                    <li>{tournament.year} and {tournament.host}</li>
                ))}
            </ul>
        </>
    )
}

export default HistoryPage