import { years } from "../data/tournaments"

function HistoryPage() {

    

    return(
        <>
            <ul>
                <li>{years.map(year=>year.goldenBall)}</li>
            </ul>
        </>
    )
}

export default HistoryPage