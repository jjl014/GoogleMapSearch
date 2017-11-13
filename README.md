# Google Map Search
by: Jimmy Li

## Running The App
* `npm install`
* `npm start`

## Challenge Overview
* Create a web app that provides a query box for users to search for places
* Use Google Places Library API
* Include a map with location markers/pins
* A list of locations (w/ interactivity between list and map)
* i.e. User enters "pizza", the list should show a list of pizza places available in the current location

## Functionality
* Enter query to search
* Search list shows businesses details
* Clicking on a search list item will center the map on the businesses
* Clicking a marker will show the name of the business
* Dragging the map will redo search with the current query for the new map location

## Component Hierarchy
* App
  * GoogleMapSearch
    * MapSearch
      * SearchBar
      * SearchList
      * Map

## Tools
* React / ReactDOM
* Redux / React-Redux
* Redux Logger
* Webpack / Webpack Dev Server
* JavaScript
* Babel

## Notes
### Design
For the design of the App, I decided to use Redux to keep track of a global state to make it more efficient. Components who are subscribed to the store will receive updates and re-render accordingly.

There were some loading states that I could have kept track of in the store, but I decided to just let the components local states take care of it instead.

For the color scheme of the App, I took some inspiration from Zenefit's website. I also added a CSS loader to make it a little more appealing.

For the stars, I kept it simple and used the Font Awesome star icons.

## Debugging and Testing
For debugging and testing, I made use of the React Dev Tools chrome extension that was available while using the debugger and logging to the console if needed. Redux-Logger also helped with keeping track of the current state of the store.

## Challenges
There were definitely weird bugs that I ran into when creating this App. But making use of Redux-Logger and the component lifecycle methods helped.

Another bug I ran into was when the user clicks on a list item and it pans to the business location, it would redo a search on that new location. This was caused by the idle event listener on the map. That wasn't the result I wanted so I created a location filter in the store to keep track of whether or not the event listener should fire or not.
