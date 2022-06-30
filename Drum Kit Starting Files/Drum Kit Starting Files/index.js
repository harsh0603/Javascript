// document.querySelector("button").addEventListener("click",handleClick);




//this is the event listner that will work only when it got called
// ------------------------------------------------------
// if we add the () with the function in the event listner then it will call the fuction when is is make staight away
// ------------------------------------------------------


// for(var i=0;i<document.querySelectorAll(".drum").length;i++){


//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         alert("i got clicked");
//     })



// }



// function handleClick(){
//     alert("i got click");
// }




// --------------------------------------------------------------------------------------------------------------------------------------




// var num1 = prompt("enter first number");
// var num2 = prompt("enter the second number");

// function add(num1,num2){
//     return (num1+num2);
// }

// function subtract(num1,num2){
//     return (num1-num2);
// }

// function multiply(num1,num2){
//     return (num1*num2);
// }


// function divide(num1,num2){
//     return (num1/num2);
// }

// function calculate(num1,num2,operator){
//     return operator(num1,num2);
// }


// alert(calculate(num1,num2,subtract)); //this is the higher order function with passing argument as function







// ------------------------------------------------------------------------------------------------------







for(var i=0;i<document.querySelectorAll(".drum").length;i++){


    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        // this is for the clicks


        var buttonInnerHTML = this.innerHTML; //this is the inner html of the selected button in the variable 'i'
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        
        
        
    })
    
    
    // this is for the keyboard buttons
    
    
    document.addEventListener("keydown",function(event){ //here the document is meant on the whole page and key pressed  on the whole page
        makeSound(event.key);  ///event is the information about the key pressed
        buttonAnimation(event.key);
    })







    function makeSound(key) {
        switch (key) {
            case "w":
                var tom1 =new Audio("sounds/tom-1.mp3");
        tom1.play();
                break;
            case "a":
                var tom2 =new Audio("sounds/tom-2.mp3");
        tom2.play();
                break;
            case "s":
                var tom3 =new Audio("sounds/tom-3.mp3");
        tom3.play();
                break;
            case "d":
                var tom4 =new Audio("sounds/tom-4.mp3");
        tom4.play();
                break;
            case "j":
                var crash =new Audio("sounds/crash.mp3");
        crash.play();
                break;
        
            case "k":
                var kick_bass =new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
                break;
        
            case "l":
                var snare =new Audio("sounds/snare.mp3");
        snare.play();
                break;
        
            default:
               console.log(key);
        }
        
    }



    function buttonAnimation(btn){
        var activeButton = document.querySelector("."+btn);   //cancatinating the class (.w or .j or .k)
        activeButton.classList.add("pressed");                           

    }







}


