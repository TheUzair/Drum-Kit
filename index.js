
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick {
//     alert("I got clicked.");
// }


// document.querySelector("button").addEventListener("click", function() {
//     alert("I got clicked.");
// });



// Detecting button press

var totalDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<totalDrumButtons; i++) { 

    document.querySelectorAll("button")[i].addEventListener("click", function() {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
       
     
        
    });

}

//Detecting keyboard press

document.addEventListener("keypress", function(event) {

    makeSound(event.key.toLowerCase() || event.key.toUpperCase);

    buttonAnimation(event.key.toLowerCase() || event.key.toUpperCase);
    
});
   

function makeSound(key) {

    switch(key) {
        case "w" : 
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;
        case "a" : 
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;
        case "s" : 
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;
        case "d" : 
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;
        case "j" : 
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;
        case "k" : 
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;
        case "l" : 
                    var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;
        default:
                    console.log(this.innerHTML);
        
    }

}


function buttonAnimation(currentKey) {
    
    var activeButton =  document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}