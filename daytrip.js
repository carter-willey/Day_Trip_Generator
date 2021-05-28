"use strict";

let destinationsArray = ["Chicago", "Madison", "Minneapolis", "Green Bay"];
let transportationArray = ["Bus", "Train", "Car", "Plane"];
let entertainmentArray = ["visit a museum", "walk through downtown", "go shopping", "see the nightlife"];
let restaurantArray = ["Pizza Shop", "American Style Restaurant", "Fine Dining", "Food Trucks"];

//WILL USE THESE LATER AFTER MVP IS COMPLETE
// let minneapolisRestaurants = ["Hell's Kitchen", "Al's Breakfast", "Alma", "French Meadow Bakery"];
// let madisonRestaurants = ["Graze", "Gotham Bagels", "Tipsy Cow", "Cento"];
// let chicagoRestaurants = ["Avec", "Redhot Ranch", "Lou Malnati's", "Bluebird Cafe"];
// let greenBayRestaurants = ["Angelina", "Hagemeister Park", "Black Stone", "The Creamery Downtown"];

//we will use this one function to randomly select from each array. giving us a random value for destination, transportation, restaurant, etc.
function chooseRandomElement(arrayToSelectFrom){
  let chooseRandomElement = arrayToSelectFrom[Math.floor(Math.random() * arrayToSelectFrom.length)];
  return chooseRandomElement;
}

//this function will pick a random activity from each array and return them in a new array
function chooseActivities(destinations, transportation, entertainment, restaurants){
  let randomDestination = chooseRandomElement(destinations);
  let randomTransport = chooseRandomElement(transportation);
  let randomEntertainment = chooseRandomElement(entertainment);
  let randomRestaurant = chooseRandomElement(restaurants);

  return [randomDestination, randomTransport, randomEntertainment, randomRestaurant];
}
