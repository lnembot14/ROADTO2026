
function StatCard({icon, label, value}) {
    return(
        <>
            <div>
                <h2>{icon}</h2>
                <p>{label}</p>
                <p>{value}</p>
            </div>
        </>
    )
}

export default StatCard