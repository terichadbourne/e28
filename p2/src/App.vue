<template>
  <div id="app">
    <h1>Potty Talk</h1>
    <p>
      A mystery word game to accompany the
      <a
        href="http://toilettranscripts.com"
        target="”_blank”"
      >Toilet Transcripts</a>
    </p>

    <div id="word">
      <div v-if="solution">
        <SolutionTile
          v-for="(letter, index) in solution"
          v-bind:key="index"
          :gameStatus="gameStatus"
          :letter="letter"
          :correctGuesses="correctGuesses"
        ></SolutionTile>
      </div>
    </div>

    <div v-if="gameStatus !== 'pregame'" :class="{ warn: strikesRemaining < 3 }">
      <h2>Strikes: {{strikes}}</h2>
      <h3>
        (
        <em>{{strikesRemaining}} strikes remaining</em>)
      </h3>
      <p v-if="liveGame && (strikesRemaining > 1)">
        Uh oh! You're almost out of guesses. Go check out the
        <a
          href="http://toilettranscripts.com/glossary.html"
          target="”_blank”"
        >Toilet Transcripts glossary</a> if you're feeling particularly stumped.
      </p>
    </div>

    <div class="feedback">
      <p v-if="gameStatus === 'won'" class="won">🏆 You won! Congratulations! 🏆</p>
      <p v-if="gameStatus === 'lost'" class="lost">
        Oops. That didn't go so well. 🤦
        <span
          v-if="correctGuesses.length"
        >On the plus side, it's looking very Christmas-y up there ☝️</span>
        Want to play again?
      </p>
      <p v-if="gameStatus === 'pregame'">Ready to get started?</p>
    </div>

    <div v-if="!liveGame">
      <div>
        <p>Select a level:</p>
        <input type="radio" id="easy" value="easy" v-model="level" />
        <label for="easy">Easy</label>

        <input type="radio" id="hard" value="hard" v-model="level" />
        <label for="hard">Hard</label>

        <input type="radio" id="surprise" value="surprise" v-model="level" />
        <label for="surprise">Surprise Me</label>
      </div>
      <button id="start" v-if="!liveGame" v-on:click="startGame">Start New Game</button>
    </div>

    <div v-else>
      <p>Level: {{easySolutions.includes(solution) ? 'Easy' : 'Hard'}}</p>
      <GuessButton
        v-for="letter in alphabet"
        v-bind:key="letter"
        v-on:guess-letter="onGuessLetter"
        :letter="letter"
        :liveGame="liveGame"
        :correct="isCorrect(letter)"
      ></GuessButton>
      <p>Guess a letter by clicking a button above. Make {{ maxStrikes }} incorrect guesses and you'll lose, so keep an eye on your strike tally. Remember, all words are toilet-themed.</p>
    </div>
  </div>
</template>

<script>
import GuessButton from "./components/GuessButton.vue";
import SolutionTile from "./components/SolutionTile.vue";

export default {
  name: "app",
  components: {
    GuessButton,
    SolutionTile
  },
  data: function() {
    return {
      solutions: [
        "toilet",
        "potty",
        "bathroom",
        "disgusting",
        "flush",
        "nasty",
        "restroom",
        "terrible",
        "wrong",
        "smell",
        "gross",
        "consequences",
        "disappointed",
        "spilled",
        "trouble"
      ],
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
      solution: "",
      correctGuesses: [],
      incorrectGuesses: [],
      level: "surprise",
      strikes: 0,
      maxStrikes: 6
    };
  },
  computed: {
    easySolutions: function() {
      return this.solutions.filter(word => word.length < 6);
    },
    hardSolutions: function() {
      return this.solutions.filter(word => word.length > 5);
    },
    uniqueCharacterCount: function() {
      return Array.from(new Set(this.solution.split(""))).length;
    },
    liveGame: function() {
      return this.gameStatus === "playing";
    },
    strikesRemaining: function () {
      return this.maxStrikes - this.strikes
    },
    gameStatus: function() {
      if (this.solution === "") {
        return "pregame";
      } else if (this.strikesRemaining === 0) {
        return "lost";
      } else if (this.correctGuesses.length === this.uniqueCharacterCount) {
        return "won";
      } else {
        return "playing";
      }
    }
  },
  methods: {
    startGame: function() {
      let oldSolution = this.solution;
      let words = [];
      if (this.level === "hard") {
        words = this.hardSolutions;
      } else if (this.level === "easy") {
        words = this.easySolutions;
      } else {
        words = this.solutions;
      }
      while (this.solution === oldSolution) {
        this.solution = words[Math.floor(Math.random() * words.length)];
      }
      this.strikes = 0;
      this.correctGuesses = [];
    },
    isCorrect: function(letter) {
      return this.solution.includes(letter);
    },
    onGuessLetter: function(guessedLetter) {
      if (this.isCorrect(guessedLetter)) {
        this.correctGuesses.push(guessedLetter);
      } else {
        this.strikes++;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-size: 16px;
}

button {
  -webkit-box-shadow: 0 5px 10px #666;
  -moz-box-shadow: 0 5px 10px #666;
  box-shadow: 0 5px 10px #666;
  border-radius: 5px;
  border-width: 0;
  padding: 5px;
}

button:disabled {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

button.guess,
.letter {
  background-color: black;
  color: white;
  display: inline-block;
  height: 30px;
  width: 30px;
  margin: 5px;
  font-weight: bold;
  text-align: center;
}

button.guess:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

button.guess.correct:disabled,
.letter.guessed {
  background-color: green;
}

button.guess.incorrect:disabled,
.letter.missed {
  background-color: red;
}

p.lost,
.warn {
  color: red;
}

p.won {
  color: green;
}

.feedback {
  font-size: 1.2em;
  font-weight: bold;
}

.letter {
  border-radius: 5px;
  border-width: 0;
  padding: 5px;
}

#start {
  background-color: black;
  color: white;
  margin-top: 10px;
  display: inline-block;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
