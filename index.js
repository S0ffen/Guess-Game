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
        alert("dont leave blank input")
    }

    if(e.key ==="Enter"  && parseInt(userInput.value)>101){
        alert("wrong number")
    }
    
    if(e.key === 'Enter' && userInput.value > 0 && parseInt(userInput.value)<101){
       previous.push(userInput.value)
       document.querySelector(".previousNumber").classList.remove("hidden")
       document.querySelector(".previousNumber").innerHTML = previous

    
    }
    if(e.key === 'Enter' &&  parseInt(userInput.value) === randomNumber && Guesses != 15  ) {
        textafterGuess.classList.remove("hidden")
        textafterGuess.innerHTML = "You Guess it"
        Guesses ++
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
    }
    console.log(Guesses)
})

