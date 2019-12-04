## P3 Peer Review

+ Reviewer's name: Teri Chadbourne (@terichadbourne)
+ Reviwee's name: Irene Brodskiy (@ibrodsk76)
+ URL to reviewee's Github repo: *<https://github.com/ibrodsk76/e28>*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
- As an end user, I can't see any errors, but when I navigate to "Trips" with the console open, I see the following error:`TypeError: Cannot read property 'length' of null`. Interestingly the error only occurs when I do have at least one itinerary, not when I have none.


### Were there any parts of the interface that you found confusing or unclear?
- While on a Destinations page, the call to action is "Add to Itinerary," but to view an itinerary you need to click on "Trips." More consistent naming would be great here. It might also be helpful to label this as "My Trips" or "My Itineraries" so that you don't expect to find content there until you've taken an action.
- I appreciated that when I removed all places from an itinerary, the UI clearly stated "No places." However, it wasn't immediately obvious to me that clicking on the city name would take me to the Destination page to add more places. Instead saying "No places saved. Add to your Paris itinerary." (with a link to that destination page) would have made for a more clear call to action.
- Likewise, I appreciated the "No trips" message when on the Trips page without any itineraries saved. However, changing that to something like "Select a destination to build your itinerary" (linking to the Destinations page) would be a nice call to action.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
- I'm curious why/whether it was necessary to include `let itinerary = new Trip();` in the `removeFromitinerary` method in `TripPage.vue` after already using it in `mounted`. (See <https://github.com/ibrodsk76/e28/blob/02c67a95948322938bc7ca96370ba2d4c98b28fe/p3/src/components/pages/TripPage.vue#L39-L52>)

### Are there any parts of the code that you found interesting or taught you something new?
- At the top of `Trips.js` I really appreciated the sample of the data format for quick reference. Along with the nice commenting in that file, that format sample would help me a lot as a new developer on the project. 
- It took me a while to find figure out how `v-on:remove-fromitinerary='removeFromitinerary($event[0],$event[1])'` in `TripePage.vue` was receiving the needed variables for the method, but I eventually spotted `<button @click="$emit('remove-fromitinerary', [destination.id, place.id])">Remove from itinerary</button>` in `showTripplace.vue`. I think of the properties of events as being dictated the browser and wasn't aware of this formatting option.

### Are there any best practices discussed in course material that you feel were not addressed in the code?
- A nice bonus for this application would be the ability to see how many itineraries/trips you have saved. This could be implemented in the same way we saw it for the Zipfoods Cart feature, with a nubmer in parenthesis after "Trips" in the nav. That would also

### Do you have any additional comments not covered in the above questions?
- Great job with this! It's nice and clean has no user-facing errors. 🎉
- The button text change from "Add to itinerary" to "Remove from itinerary" offers clear success feedback without the need for alerts.
- I love that you included photos of each landmark.
