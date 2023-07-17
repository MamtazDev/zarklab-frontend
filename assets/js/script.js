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

// const seePassword = document.querySelector("#signup_Password");
// seePassword.addEventListener("click", () =>  {
//     var x = document.getElementById("passInput_signup");
//     // var eyeIcon = document.getElementById("eyeIcon");
//     if (x.type === "password") {
//         x.type = "text";
//         eyeIcon.src = "assets/image/sign_up_pass_eye.png";
//     } else {
//         x.type = "password";
//         eyeIcon.src = "assets/image/sign_up.png";
//     }

// })

// const signInPassword = document.querySelector("#signin_Password");
// signInPassword.addEventListener("click", () =>  {
//     var x = document.getElementById("passInput_signin");
//     if (x.type === "password") {
//         x.type = "text";

//     } else {
//         x.type = "password";
//     }


   
// })


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "./assets/image/sign_up_pass_eye.png";
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "./assets/image/password_eye.png";
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
        