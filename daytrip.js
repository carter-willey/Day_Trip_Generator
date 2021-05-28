"use strict";

let destinationsArray = ["Chicago", "Madison", "Minneapolis", "Green Bay"];
let transportationArray = ["Bus", "Train", "Car", "Plane"];
let minneapolisRestaurants = ["Hell's Kitchen", "Al's Breakfast", "Alma", "French Meadow Bakery"];
let madisonRestaurants = ["Graze", "Gotham Bagels", "Tipsy Cow", "Cento"];
let chicagoRestaurants = ["Avec", "Redhot Ranch", "Lou Malnati's", "Bluebird Cafe"];
let greenBayRestaurants = ["Angelina", "Hagemeister Park", "Black Stone", "The Creamery Downtown"]

//we will use this one function to randomly select from each array. giving us a random value for destination, transportation, restaurant, etc.
function chooseRandomElement(arrayToSelectFrom){
  let chooseRandomElement = arrayToSelectFrom[Math.floor(Math.random() * arrayToSelectFrom.length)];
  return chooseRandomElement;
}
