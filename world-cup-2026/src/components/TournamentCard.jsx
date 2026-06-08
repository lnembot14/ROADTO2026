function TournamentCard({year, flag, host, champions}){
    return (
        <>
            <div className="tournaments-box">
                <h2> {year} </h2>
                <h2> {flag} </h2>
                <h2> {host} </h2>
                <h2> {champions} </h2>
            </div>
        </>
    )
}

export default TournamentCard