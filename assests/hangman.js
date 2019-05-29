


let possibleWords = ["it","jaws","halloween","frankenstein","psycho","theshining"]
let currentWord = 'jaws'
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
      reset()
    }
    shouldGuessesGoDown(e.key)
    console.log(currentWord, lettersGuessed, guessesRemaining)
    updateDOM()
    checkIfUserLost()
  }
}
function shouldGuessesGoDown(letterGuessed){
  if(!currentWord.includes(letterGuessed)){
    guessesRemaining = guessesRemaining - 1
  }
}
function checkIfUserLost(){
  if(guessesRemaining <= 0){
    alert('you lost')
    reset()
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
    lettersGuessed = [''];
    initGame()
}
