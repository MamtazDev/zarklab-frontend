// sign up Steeper Start
var visibilityIndex = 0;


const incrementIndex = document.querySelector("#continue");
incrementIndex.addEventListener("click", () => {

    visibilityIndex =  visibilityIndex + 1;
    const secondSteeperdiv = document.querySelector("#secondSteeper");

    if( visibilityIndex == 1){
        visibilityIndex === 1 && secondSteeperdiv.classList.remove('d-none'); 
        incrementIndex.remove();
    }          
})


const incrementIndex_pass = document.querySelector("#continue_pass") ;
incrementIndex_pass.addEventListener("click", () => {
    visibilityIndex =  visibilityIndex + 1;
    
    const thirdSteeperdiv = document.querySelector("#thirdSteeper");

    if( visibilityIndex == 2){
        visibilityIndex === 2 && thirdSteeperdiv.classList.remove('d-none');
        incrementIndex_pass.remove();
    }          
})

const incrementIndex_userName = document.querySelector("#continue_userName") ;
incrementIndex_userName.addEventListener("click", () => {

    // alert("ok");
    visibilityIndex =  visibilityIndex + 1;
    
    const fourthSteeperdiv = document.querySelector("#fourthSteeper");

    if( visibilityIndex == 3){
        visibilityIndex === 3 && fourthSteeperdiv.classList.remove('d-none'); 
        incrementIndex_userName.remove();
    }          
})

    
     
visibilityIndex === 4 && fiveSteeperdiv.classList.remove('d-none') ;   

// const firstSteeperdiv = document.querySelector("#firstSteeper")


const fiveSteeperdiv = document.querySelector("#fiveSteeper");


// sign up Steeper End


// Show password Start

const seePassword = document.querySelector("#see_Password");

seePassword.addEventListener("click", () =>  {
    var x = document.getElementById("passInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
})

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
        