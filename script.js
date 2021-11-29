let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget =() =>{
let randomNum = Math.floor(Math.random()*9)+1
return randomNum
};

const generateComp =() =>{
let randomNum = Math.floor(Math.random()*9)+1
return randomNum
};

let targetValue = generateTarget()
let compValue = generateComp()

const compareGuesses = (humanGuess,compGuess,targetValue) =>{
  if(humanGuess < 0||humanGuess>9){
    alert('The number you have chosen is out of range')
    return
  }
  let hGuess = humanGuess-targetValue
  let cGuess = compGuess - targetValue
  hGuess = Math.abs(hGuess)
  cGuess = Math.abs(cGuess)
if(hGuess === cGuess){
    return true
    
  } else if(hGuess>cGuess){
    return false
    
  } else if(hGuess < cGuess ){
    return true
  
  }
}
compareGuesses(7,compValue,targetValue)

const updateScore = (winner)=>{
if(winner ==='human'){
  humanScore+=1
} else{
  computerScore+=1
}
} 

const advanceRound = () =>{
  currentRoundNumber+=1
}

