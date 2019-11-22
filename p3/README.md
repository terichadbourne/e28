# Project 3
+ By: Teri Chadbourne
+ Production URL: <http://p3.teri-e28.me/>


## Outline of features
This is an MVP of an app that could be used to share feedback among company employees. In the current data structure, each employee has a single rant and a single rave maximum.

There are currently 3 defined "pages":
- People (view a list of all employees with their rants and raves)
- Rants (view all rants anonymously or filter down to view just favorites)
- Raves (view all raves anonymously or filter down to view just favorites)

Clicking on a specific rant or rave takes you a page with more detail, including the person the feedback is from.

While on Rants or Raves pages or looking at a specific piece of feedback, the user can mark it as a favorite. (In a real-world application, this could be used to judge where employees are in alignment on their opinions.)

## Outside resources
* Vue documentation, with particular attention to:
  - [Event Modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers) to prevent default actions
  - [Form Input Bindings](https://vuejs.org/v2/guide/forms.html)
* [JSONLint](https://jsonlint.com/)
* LocalStorage:
  - [How to retrieve all localStorage items without knowing the keys in advance?
](https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance/48712489)
  - [How to check whether a storage item is set](https://stackoverflow.com/questions/3262605/how-to-check-whether-a-storage-item-is-set)
* [The problem of radio and v-model](https://github.com/vuejs/vue/issues/3238)
* [Transparent Favicon](http://transparent-favicon.info/)
* [My JSON Server](https://my-json-server.typicode.com/)

## Notes for instructor
- I'd like use `Array.filter()` to present the favorites, but I'm currently having some trouble following the example used in Zipfoods to create a single source of truth and keep it updated everywhere in the app. I keep getting super close and then breaking something new. I plan to work on that for P4, but for now I'm cheating by using CSS to hide the non-favorited items, since the FeedbackCards are indeed keeping accurate information aboout themselves that matches localStorage. One downside that I can't fix until I make the data stick is that I can't create a conditional for whether there are any favorited items, so that I can include a "nothing to see here" message when the filtered list is empty.
- I've adapted your `Cart.js` code from the Zipfoods example to create my `Favorites.js`.
