import "./StatCard.css"


function StatCard({icon, label, subtext, value}) {
    return(
        <>
            <div className="Card-boxes">
                <h2>{icon}</h2>
                <h2>{value}</h2>
                <p>{label}</p>
                <p>{subtext}</p>
            </div>
        </>
    )
}

export default StatCard