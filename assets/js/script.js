// sign up Steeper Start
var visibilityIndex = 0;
const firstSteeperdiv = document.querySelector("#firstSteeper")
const secondSteeperdiv = document.querySelector("#secondSteeper");
const thirdSteeperdiv = document.querySelector("#thirdSteeper");
const fourthSteeperdiv = document.querySelector("#fourthSteeper");
const fiveSteeperdiv = document.querySelector("#fiveSteeper");

const incrementIndex = document.querySelector("#continue");
incrementIndex.addEventListener("click", () => {

    visibilityIndex =  visibilityIndex + 1;

    if( visibilityIndex == 1){
        visibilityIndex === 1 && secondSteeperdiv.classList.remove('d-none'); 
        incrementIndex.remove();
    }          
})


const incrementIndex_pass = document.querySelector("#continue_pass") ;
incrementIndex_pass.addEventListener("click", () => {
    visibilityIndex =  visibilityIndex + 1;

    if( visibilityIndex == 2){
        visibilityIndex === 2 && thirdSteeperdiv.classList.remove('d-none');
        incrementIndex_pass.remove();
    }          
})

const incrementIndex_userName = document.querySelector("#continue_userName") ;
incrementIndex_userName.addEventListener("click", () => {

    // alert("ok");
    visibilityIndex =  visibilityIndex + 1;
    
    if( visibilityIndex == 3){
        visibilityIndex === 3 && fourthSteeperdiv.classList.remove('d-none'); 
        incrementIndex_userName.remove();
        firstSteeperdiv .remove()
        secondSteeperdiv.remove()
        thirdSteeperdiv.remove();
    }          
})

const incrementIndex_digit = document.querySelector("#enter_digit") ;
incrementIndex_digit.addEventListener("click", () => {

    // alert("ok");
    visibilityIndex =  visibilityIndex + 1;
    
    if( visibilityIndex == 4){
        visibilityIndex === 4 && fiveSteeperdiv.classList.remove('d-none') ;   
        incrementIndex_userName.remove();
        firstSteeperdiv .remove()
        secondSteeperdiv.remove()
        thirdSteeperdiv.remove();
        fourthSteeperdiv.remove();
    }          
})



visibilityIndex === 4 && fiveSteeperdiv.classList.remove('d-none') ;   


// sign up Steeper End


// Show password Start

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");

    var passwordInput_2 = document.getElementById("passwordInput_2");
    var eyeIcon_2 = document.getElementById("eyeIcon_2");

  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "./assets/image/sign_up_pass_eye.png";
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "./assets/image/password_eye.png";
    }

    if (passwordInput_2.type === "password") {
        passwordInput_2.type = "text";
        eyeIcon_2.src = "./assets/image/sign_up_pass_eye.png";
      } else {
        passwordInput_2.type = "password";
        eyeIcon_2.src = "./assets/image/password_eye.png";
      }
  }


// Show password End

// for payment Page

function radioCheck(radio) {
    data = radio.getAttribute("data")
    
    // Hide all divs
    
    for (var i = 0; i < 2; i++) { // assuming your data attr 1,2,3,..,N
        var el = 'ifRadio' + (i + 1); // ifRadio1, ifRadio2, etc
        document.getElementById(el).style.display = "none";
    }
    
    // Show the current div
    
    var el = 'ifRadio' + (data); // ifRadio1, ifRadio2, etc
    document.getElementById(el).style.display = "block";
}

// end payment page
        