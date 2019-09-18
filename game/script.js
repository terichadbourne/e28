let startButton = document.querySelector("#start")
let guessButtons = document.querySelectorAll(".guess")
let strikeZone = document.querySelector("#strikes")
let word = document.querySelector("#word")
let remaining = document.querySelector("#remaining")
let strikeInfo = document.querySelectorAll(".strikeInfo")

startButton.addEventListener("click", start)
guessButtons.forEach(function (guessButton) {
  guessButton.addEventListener("click", guess)
  guessButton.disabled = true
})

const solutions = ["toilet", "potty", "bathroom", "disgusting", "flush", "nasty", "restroom", "terrible", "wrong", "smell", "gross", "consequences", "disappointed", "spilled", "trouble"]
let strikes = 0
let solution = null
let solutionLetters = null
let currentLetters = null
let guessedLetters = null
let failedLetters = null

function start() {
  guessButtons.forEach(function (guessButton) {
    guessButton.disabled = false
  })
  strikes = 0
  displayStrikes()
  solution = solutions[Math.floor(Math.random() * solutions.length)]
  console.log(solution)
  solutionLetters = solution.split("")
  console.log("solutionLetters", solutionLetters)
  currentLetters = []
  guessedLetters = []
  displayWord()
  fail.innerHTML = ""
  strikeInfo.forEach(function (element) {
    element.classList.remove("fail")
  })
}

function displayStrikes() {
  strikeZone.innerHTML = strikes
  remaining.innerHTML = 6 - strikes
}

function loseGame() {
  guessButtons.forEach(function (guessButton) {
    guessButton.disabled = true
  })
  fail.innerHTML = solution
  strikeInfo.forEach(function (element) {
    element.classList.add("fail")
  })
}

function winGame() {
  word.classList.add("win")
  guessButtons.forEach(function (guessButton) {
    guessButton.disabled = true
  })
  word.innerHTML = "🏆🏆🏆<br>" + solution + "<br>🏆🏆🏆"
}

function displayWord() {
  currentLetters = []
  solutionLetters.forEach(function (letter) {
    console.log("letter in solutionLetters: ", letter, typeof letter)
    if (guessedLetters.includes(letter)) {
      currentLetters.push(letter)
    } else {
      currentLetters.push("_")
    }
  })
  console.log(currentLetters)
  word.innerHTML = currentLetters.join("")
  if (!currentLetters.includes("_")) {
    winGame()
  }
}

function guess(e) {
  let letter = e.target.getAttribute("data-letter")
  guessedLetters.push(letter)
  e.target.disabled = true // disable button just clicked
  // if guessed letter is in word, update and display word
  if (solutionLetters.includes(letter)) {
    displayWord()
  }
  // if guessed letter is not in word, add strike and check for loss
  else {
    strikes++
    displayStrikes()
    if (strikes > 5) {
      loseGame()
    }
  }
}
