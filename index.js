
var userInput = document.querySelector(".userInput")

var previous = []

var randomNumber = Math.ceil(Math.random()* 100)
var Guesses = 0
console.log(randomNumber)




function startGameView(){
    document.querySelector(".selectDifficulty").style.display = "none"
    document.querySelector(".game").style.display = "block"
}


function easyMode(){
    maxGuesses = 10;
    startGameView()
}

userInput.addEventListener("keyup",function(e){
    var textafterGuess = document.querySelector(".hint")
    
    console.log(parseInt(userInput.value))
    if(e.key === "Enter" && userInput.value <= 0){
        Swal.fire({
            icon: "error",
            title: "Wrong value",
            text: "Only numbers between 1-100 are acceptable",
          });
    }

    if(e.key ==="Enter"  && parseInt(userInput.value)>101){
        Swal.fire({
            icon: "error",
            title: "Wrong number",
            text: "Only numbers between 1-100 are acceptable",
          });
    }
    
    if(e.key === 'Enter' && userInput.value > 0 && parseInt(userInput.value)<101 && Guesses != 15){
       previous.push(userInput.value)
       document.querySelector(".previousNumber").classList.remove("hidden")
       document.querySelector(".previousNumber").innerHTML = previous

    
    }
    if(e.key === 'Enter' &&  parseInt(userInput.value) === randomNumber && Guesses != 15  ) {
        textafterGuess.classList.remove("hidden")
        textafterGuess.innerHTML = "You Guess it"
        Guesses = 15
        Swal.fire({
            icon: "success",
            title: "You Guess it",
          });
        document.querySelector(".resetButton").classList.remove("hidden")
        document.querySelector("input").readOnly = "true"
    }
    else if(e.key === 'Enter' &&  parseInt(userInput.value) > randomNumber && Guesses != 15){
        textafterGuess.classList.remove("hidden")
        textafterGuess.innerHTML = "Lower"
        Guesses ++
    }
    else if(e.key === 'Enter' && parseInt(userInput.value) < randomNumber && Guesses != 15){
        textafterGuess.classList.remove("hidden")
        textafterGuess.innerHTML = "Higher"
        Guesses ++
    }
    else if((e.key === 'Enter' && parseInt(userInput.value) < randomNumber && Guesses == 15)){
        textafterGuess.classList.remove("hidden")
        textafterGuess.innerHTML = "You lose"
        document.querySelector(".resetButton").classList.remove("hidden")
        document.querySelector("input").readOnly = "true"
    }
    console.log(Guesses)
})

