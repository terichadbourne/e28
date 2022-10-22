# Project 2
+ By: Teri Chadbourne
+ Production URL: <https://potty-talk.teri.dev/>

## Build strategy
+ [ ] Integrated
+ [x] Comprehensive

## Outside resources
- [Vue documentation](https://vuejs.org/v2/guide/), with special attention to:
   - [Class and style bindings](https://vuejs.org/v2/guide/class-and-style.html)
   - [Listening to child components' events](https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events)
- [VueJS: Emitting a custom event within a function in methods object](https://forum.vuejs.org/t/vuejs-emitting-a-custom-event-within-a-function-in-methods-object/22577) - This one straightened me out when I tried to emit data from child to parent but wanted to define the function in `methods` rather than in `v-on:` so I could do things both in the child component and the parent component. As usual in VueJS, I was missing a `this`.
- Trying to create an intentional delay in updating Vue data to match an animation: 
   -  [Animista](http://animista.net) - I used this service to help generate some CSS animations for the `SolutionTile` component. You'll find the credit and licensing details in my scoped CSS there. (I also considered a flip with front and back surfaces, researched in articles like [Intro to CSS 3D Transforms](https://3dtransforms.desandro.com/card-flip) but not used.) The flip is just for effect, but it caused a side effect of needing to delay the display of the revealed letter until the animation finished. I first used CSS to fade in the letter, then figured out how to make `setTimeout` work in Vue so I could do it on the logic front. 
   - [Watching computed properties](https://stackoverflow.com/questions/41067378/watching-computed-properties/41165587) - I used a watcher to set a delay on the display of the guessed letter to allow time for the tile to flip, since I wasn't able to do anything async in computed.
   - [How to set timeout in a vuejs method](https://stackoverflow.com/questions/37465289/how-to-set-timeout-in-a-vuejs-method/37465651) - This one taught me that I couldn't use `this` from an anonymous function inside my `setTimeout` and therefore need to create my own method to call.
- The comparison rabbit hole:
   - [How to remove array duplicates in ES6](https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c) - I used this to condense the actual letters in a solution down to a sorted array of unique letters that I could match to guessed letters to confirm a win. I did this by turning the array into a set (which can't have duplicates) and then back into an array.
   - [Unexpected side effect in computed property](https://stackoverflow.com/questions/49869081/unexpected-side-effect-in-computed-property) - I used this to split an array as a way to make a clone when I got a linter error because I was trying to test a sorted array of guessed letter against the winning letters and it was causing a mutation (which in my case wouldn't have mattered). But then the linter got mad when the game started and my array was empty so the split method didn't exist for it, which brings us to...
   - [ES6 ways to clone an array](https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array) - This one led me back to the same `Array.from` that was part of the original article so that I could clone without splitting.
   - And then I realized the arrays that looked identical to my eye weren't comparing as identical, and then I tried to compare using JSON.stringify, and then I learned that JSON.stringify mutates and causes the same linter errors 🤦‍♀️
  - And then I switched to checking length instead of contents of my arrays, rendering all but the first article here unused in the final product. 

## Notes for instructor
Some cool benefits of Single File Components for this particular project, as opposed to how I managed things in Project 1 for the same game:
- Using an SFC for the solution tiles let me store their letter values in a hidden spot throughout and then just toggle a display value between `?` and the actual letter based on whether the letter had been guessed (and was therefore in the correctGuesses array). That saved me all of the looping through the whole solution and rewriting a full word to the page with blanks for some of the characters. I had also been comparing each letter during that process to check for a win, and I've found a simpler way to do that this time around.
- Using an SFC for the guess buttons let me store the value of whether a guess was correct in a hidden spot so I could adjust my classes accordingly once they'd been guessed. This eliminated my previous need for an `incorrectGuesses` array.
- I also used the alphabet-splitting trick you suggested. 🎉
