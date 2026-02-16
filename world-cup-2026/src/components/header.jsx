function Header(){
    return (
         <div className = "header-container">
            <div className = "header-img">
                <img src="images/world_cup_icon.png"/>
            </div>
            <div className = "header-item">
                <h1>ROADTO2026</h1>
                <h2>U.S.A, Canada, Mexico: Destination,<span id= "special-character"> Futbol.</span> </h2>
            </div>
            <div className = "header-item">
                <button className = "header-button">About</button>
                <button className = "header-button">Reminder Sign Up</button>
            </div>
        </div>
    )
}

export default Header;