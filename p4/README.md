# Project 4
+ By: Teri Chadbourne
+ Production URL: <http://p4.teri-e28.me/>

## Improvements based on P3 peer review feedback

Made the following updates based on the [peer review](https://github.com/brld/e28/blob/master/peer-review.md) I received: 
* Added a description of the page's purpose on site (previously only covered in readme)
* Updated formatting for easier reading (`{{something}}` => `{{ something }}`)
* Added comments to the `toggleFilter` method

## Outside resources

To load Rants and Rave pages from a new consolidated Feedback component which needed access to both params and props passed via the routerload Vue documentation:
- [Passing Props to Route Components: Function Mode](https://router.vuejs.org/guide/essentials/passing-props.html#function-mode)

To create a 404 page: 
- [HTML5 History Mode: Caveat](https://router.vuejs.org/guide/essentials/history-mode.html#caveat)

To test my favoriting feature across multiple `it` tests in Cypress (which I preferred for the detailed notetaking as compared to putting all actions that touched localStorage inside of the same `it` test): 
- [Preserve cookies / localStorage session across tests in Cypress
](https://stackoverflow.com/questions/50471047/preserve-cookies-localstorage-session-across-tests-in-cypress)
- [Add option to whitelist LocalStorage entries](https://github.com/cypress-io/cypress/issues/461)

I discovered that the trouble I was having with my store for P3 was actually a problem with my array methods in `Faves.js` (using an item's ID instead of its index in the array when splicing), which I fixed while referring to:
- [How do I remove a particular element from an array in JavaScript?](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript).

## Notes for instructor

This project doesn't currently have a write option for data, so rather than validate traditional form fields, I've used Vuelidate on a radio button to display a message when the lists of favorites is empty. 
