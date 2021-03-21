# Single-Page Applications & Interfaces with Vue.js (E-28)
Coursework for <a href="https://hesweb.dev/e28">DGMD E-28</a>, Single-Page Applications & Interfaces with Vue.js, taken as a graduate-level course at Harvard Extension School in the fall of 2019. Multiple projects were built incrementally over the course of the class, adding in new Vue.js functionality as we went. 

### Potty Talk

A mystery word guessing game to accompany the <a href="http://toilettranscripts.com/">Toilet Transcripts</a>. 

![image](https://user-images.githubusercontent.com/19171465/111885993-7b853700-89a1-11eb-8f64-aae294613790.png)

This project uses single file components in Vue.js.

**View live app**: https://potty-talk.teri.dev/

**View code**: https://github.com/terichadbourne/e28/tree/master/p2

**Run locally**: 
```js
git clone https://github.com/terichadbourne/e28.git
cd e28/p2
npm install
npm run serve
```
and view at http://localhost:8080/ 


### Rants & Raves


This is an MVP of an app that could be used to share feedback among company employees. In the current data structure, each employee has a single rant and a single rave maximum. 

<div>
  <img src="https://user-images.githubusercontent.com/19171465/111885716-e3d31900-899f-11eb-9e87-9c56b734b433.png" height="250">
  <img src="https://user-images.githubusercontent.com/19171465/111885806-7a073f00-89a0-11eb-9a2e-a4953b44be47.png" height="250">  
</div>

There are currently 3 defined "pages":

- People (view a list of all employees with their rants and raves)
- Rants (view all rants anonymously or filter down to view just favorites)
- Raves (view all raves anonymously or filter down to view just favorites)

Clicking on a specific rant or rave takes you a page with more detail, including the person the feedback is from. 

While on Rants or Raves pages or looking at a specific piece of feedback, the user can mark it as a favorite. (In a real-world application, this could be used to judge where employees are in alignment on their opinions.) The app is currently read-only except for the favoriting feature. 

This project uses Vue.js, VueX, Firebase, Vuelidate, Cypress and Mocha. 

**View live app**: https://rants-raves.teri.dev/

**View code**: https://github.com/terichadbourne/e28/tree/master/p4

**Run locally**: 
```js
git clone https://github.com/terichadbourne/e28.git
cd e28/p4
npm install
npm run serve
```
and view at http://p4.loc:8080/ 
