
var app = new Vue({
    el: '#app',
    data: {
      solutions: ["toilet", "potty", "bathroom", "disgusting", "flush", "nasty", "restroom", "terrible", "wrong", "smell", "gross", "consequences", "disappointed", "spilled", "trouble"],
      alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      solution: '',
      correctGuesses: [],
      incorrectGuesses: [],
      gameStatus: "pregame",
      level: 'surprise'
    },
    computed: {
      easySolutions: function () {
        return this.solutions.filter(word => word.length < 6)
      },
      hardSolutions: function () {
        return this.solutions.filter(word => word.length > 5)
      },
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
            lettersArray.push('?')
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
        let words = []
        if (this.level === "hard") {
          words = this.hardSolutions
        } else if (this.level === "easy") {
          words = this.easySolutions
        } else {
          words = this.solutions
        }
        while (this.solution === oldSolution) {
          this.solution = words[Math.floor(Math.random() * words.length)]
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
