var userInput = document.querySelector(".userInput")

var randomNumber = Math.ceil(Math.random()* 100)
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
    var textafterGuess = document.querySelector("h3")

   
    console.log(parseInt(userInput.value))
    if(e.key === 'Enter' &&  parseInt(userInput.value) === randomNumber ) {
        textafterGuess.classList.remove("guess")
        textafterGuess.innerHTML = "You Guess it"
    }
    else if(e.key === 'Enter' &&  parseInt(userInput.value) > randomNumber){
        textafterGuess.classList.remove("guess")
        textafterGuess.innerHTML = "Lower"
    }
    else if(e.key === 'Enter' && parseInt(userInput.value) < randomNumber){
        textafterGuess.classList.remove("guess")
        textafterGuess.innerHTML = "Higher"
    }
})