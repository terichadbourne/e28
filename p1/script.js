
var app = new Vue({
    el: '#app',
    data: {
      solutions: ["toilet", "potty", "bathroom", "disgusting", "flush", "nasty", "restroom", "terrible", "wrong", "smell", "gross", "consequences", "disappointed", "spilled", "trouble"],
      alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      solution: null,
      correctGuesses: [],
      incorrectGuesses: [],
      gameStatus: "pregame"
    },
    computed: {
      strikes: function () {
        return this.incorrectGuesses.length
      },
      liveGame: function () {
        return this.gameStatus === "playing"
      },
      currentLetters: function () {
        let lettersArray = []
        let noWinYet = null
        for (i=0; i < this.solution.length; i++) {
          if ((this.correctGuesses.length > 0) && this.correctGuesses.includes(this.solution.charAt(i))) {
            lettersArray.push(this.solution.charAt(i))
          } else {
            lettersArray.push('_')
            noWinYet = true
          }
        }
        if (!noWinYet) {
          this.gameStatus = "won"
        }
        return lettersArray
      }
    },
    methods: {
        startGame: function () {
          let oldSolution = this.solution
          while (this.solution === oldSolution) {
            this.solution = this.solutions[Math.floor(Math.random() * this.solutions.length)]
          }
          this.incorrectGuesses = []
          this.correctGuesses = []
          this.gameStatus = "playing"
        },
        isCorrect: function (guessedLetter) {
          return this.solution.includes(guessedLetter)
        },
        guess: function (guessedLetter) {
          if (this.isCorrect(guessedLetter)) {
            this.correctGuesses.push(guessedLetter)
          } else {
            this.incorrectGuesses.push(guessedLetter)
            if (this.strikes >= 6) {
              this.gameStatus = "lost"
            }
          }
        }
    }
})
