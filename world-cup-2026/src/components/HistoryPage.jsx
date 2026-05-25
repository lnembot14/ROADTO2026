import { tournaments } from "../data/tournaments"

function HistoryPage() {

    

    return(
        <>
            <ul>
                <li>{tournaments.map(year=>year.year)}</li>
                <li>{tournaments.map(year=>year.host)}</li>
            </ul>
        </>
    )
}

export default HistoryPage