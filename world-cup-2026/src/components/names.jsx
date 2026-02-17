function Names(){
  return (
    <>  
        <div className="form-container">
            <form id="rsvp-form" title="rsvp-form">
                <label for="fname">First Name:</label>
                <input id="fname" type="text" /> 

                <label for="lname">Last Name:</label>
                <input id="lname" type="text" />
                
                <label for="gmail">Email:</label>
                <input id="gmail" type="email" /> 
            </form>
            <button id="rsvp-button" type ="button">Button</button>
        </div>  
    </> 
  )
}

export default Names
