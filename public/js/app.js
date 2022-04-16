// Variables
const tripElements = document.getElementsByClassName("trip-item");
let tripItems = []
for (var i=0; i<tripElements.length; i++){
    tripItems.push(tripElements[i].innerText);
}

const actElements = document.getElementsByClassName("act-item");
let actItems = []
for (var i=0; i<actElements.length; i++){
    actItems.push(actElements[i].innerText);
}

const restElements = document.getElementsByClassName("rest-item");
let restItems = []
for (var i=0; i<restElements.length; i++){
    restItems.push(restElements[i].innerText);
}

let movieElements = document.getElementsByClassName("movie-item");
let movieItems = []
for (var i=0; i<movieElements.length; i++){
    movieItems.push(movieElements[i].innerText);
}



// Custom variables
const tripButton = document.getElementById("trip-button");
const actButton = document.getElementById("act-button");
const restButton = document.getElementById("rest-button");
const movieButton = document.getElementById("movie-button");

// Event listeners
tripButton.addEventListener("click", startTrip);
actButton.addEventListener("click", startAct);
restButton.addEventListener("click", startRest);
movieButton.addEventListener("click", startMovie);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Functions
function startTrip() {
    for (var i=0; i<20; i++) {
        setTimeout(() => {
            const randNum = Math.floor(Math.random() * tripItems.length )
            let surprise = tripItems[randNum];
            tripButton.innerText = surprise;
        }, 30 * (i+1));
    }
}

function startAct() {
    for (var i=0; i<20; i++) {
        setTimeout(() => {
            const randNum = Math.floor(Math.random() * actItems.length )
            let surprise = actItems[randNum];
            actButton.innerText = surprise;
        }, 30 * (i+1));
    }
}

function startRest() {
    for (var i=0; i<20; i++) {
        setTimeout(() => {
            const randNum = Math.floor(Math.random() * restItems.length )
            let surprise = restItems[randNum];
            restButton.innerText = surprise;
        }, 30 * (i+1));
    }
}

function startMovie() {
    for (var i=0; i<20; i++) {
        setTimeout(() => {
            const randNum = Math.floor(Math.random() * movieItems.length )
            let surprise = movieItems[randNum];
            movieButton.innerText = surprise;
        }, 30 * (i+1));
    }
}