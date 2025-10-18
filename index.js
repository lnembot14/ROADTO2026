/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
const toggleButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
toggleButton.addEventListener("click", toggleDarkMode);



/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/
const legacy_button = document.getElementById('rsvp-button')

  const addParticipant = (event, person) => {
    if (event) {
        event.preventDefault();
    }

    const newParagraph = document.createElement('p');
    newParagraph.textContent = "🎟️" + " " + person.name + " " + person.lname + " has cemented his Legacy." ;

    const rsvpList = document.querySelector('.participants')
    rsvpList.appendChild(newParagraph);
}

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
  event.preventDefault();
  let containsErrors = false;

  let rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  let person = {
    name: rsvpInputs[0].value,
    lname: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  }

  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
      rsvpInputs[i].classList.add("error");
      containsErrors = true;
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }

  const emailInput = rsvpInputs[2]
  if(!emailInput.checkValidity()){
    emailInput.classList.add("error");
    containsErrors = true;
  }


  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields
  if(containsErrors == false){
    addParticipant(event, person);
    toggleModal(person)
    for (let i=0; i<rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
legacy_button.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal"); // TODO
    let modalContent = document.getElementById("modal-text")
    
    // TODO: Update modal display to flex
    modal.style.display = "flex"
    

    // TODO: Update modal text to personalized message
    modalContent.textContent = "Thanks for RSVP'ing " + person.name + " can't wait to see you on the field!"

    // Set modal timeout to 5 seconds
    let intervalId = setInterval(animateImage, 500)
    setTimeout(() =>{
      modal.style.display = "none"
      clearInterval(intervalId)
    }, 5000)
    
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;

let modalImage = document.getElementById("modal-image")

const animateImage = () =>{
  if(rotateFactor == 0){
    rotateFactor = -10
    modalImage.style.transform = `rotate(${rotateFactor}deg)`
  }
  else{
    rotateFactor = 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`
  }
}