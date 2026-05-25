import { tournaments } from "../data/tournaments"

function HistoryPage() {

    return(
        <>
            <div>
                <h1>World Cup History</h1>
                <p>Every tournament from 1930 to 2022 — champions, records, and the moments that defined the game.</p>
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