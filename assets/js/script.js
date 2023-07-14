// sign up Steeper Start
var visibilityIndex = 0;


const incrementIndex = document.querySelector("#continue") ;

incrementIndex.addEventListener("click", () => {

    visibilityIndex =  visibilityIndex + 1;
    // const firstSteeperdiv = document.querySelector("#firstSteeper")
    const secondSteeperdiv = document.querySelector("#secondSteeper");

    if( visibilityIndex == 1){
        visibilityIndex === 1 && secondSteeperdiv.classList.remove('d-none'); 
        incrementIndex.remove();
    }          
})

visibilityIndex === 2 && thirdSteeperdiv.classList.remove('d-none');       
visibilityIndex === 3 && fourthSteeperdiv.classList.remove('d-none');      
visibilityIndex === 4 && fiveSteeperdiv.classList.remove('d-none') ;   

const thirdSteeperdiv = document.querySelector("#thirdSteeper");
const fourthSteeperdiv = document.querySelector("#fourthSteeper");
const fiveSteeperdiv = document.querySelector("#fiveSteeper");


// sign up Steeper End


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
        