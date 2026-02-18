import Button from "./button";

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
            <div className = "header-items">
                <Button text="About" color="gold" />
                <Button text="Reminder Sign Up" color="gold" />
            </div>
        </div>
    )
}

export default Header;