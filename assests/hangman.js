
// Game function

// reset function

//check letters function

// won check funtion 

// 
let possibleWords = ["tomandjerry","mickeymouse","popeye","scoobydoo","looneytunes","rugrats"]
let currentWord = 'popeye'
let wins = 0
let guessesRemaining = 6
let lettersGuessed = []
function initGame() {
  assignCurrentWord()
  setEventListeners()
  updateDOM()
}
initGame()
function wordHasBeenGuessed(){
  for(let i=0; i<currentWord.length; i++){
    if(lettersGuessed.includes(currentWord[i])){
      
    } else {
      return false
    }
  }
  return true
}
function assignCurrentWord() {
  const index = Math.floor(Math.random() * ((possibleWords.length -1) - 0 + 1)) + 0;
  currentWord = possibleWords[index]
}
function setEventListeners(){
  document.onkeyup = function(e){
    lettersGuessed.push(e.key)
    if(wordHasBeenGuessed()){
      wins++
      document.getElementById('winscounter').textContent = wins
      initGame()
    }
    shouldGuessesGoDown(e.key)
    console.log(currentWord, lettersGuessed, guessesRemaining)
    updateDOM()
    checkIfUserLost()
  }
}
function checkIfUserLost(){
  if(guessesRemaining <= 0){
    alert('you lost')
  }
}
function shouldGuessesGoDown(letterGuessed){
  if(!currentWord.includes(letterGuessed)){
    guessesRemaining = guessesRemaining - 1
  }
}
function updateDOM(){
  document.getElementById("guessesleft").textContent = guessesRemaining
  document.getElementById("alreadyguessed").textContent = lettersGuessed
  showLettersOrDashes()
}
function showLettersOrDashes() {
  let displayWord = ''
  for(let i=0; i<currentWord.length; i++){
    if(lettersGuessed.includes(currentWord[i])){
      displayWord = displayWord + currentWord[i] + ' '
    } else {
      displayWord = displayWord + '_' + ' '
    }
  }
  document.getElementById('currentword').textContent = displayWord
}
function reset() {
    guessesRemaining = 6;
    wrongGuess = [];
    blanksAndCorrect = [];
    initGame()
}
