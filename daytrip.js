"use strict";

let destinationsArray = ["Chicago", "Madison", "Minneapolis", "Green Bay"];
let transportationArray = ["Bus", "Train", "Car", "Plane"];
let entertainmentArray = ["visiting a museum", "walking through downtown", "going shopping", "seeing the nightlife"];

//WILL USE THESE LATER AFTER MVP IS COMPLETE
let minneapolisRestaurants = ["Hell's Kitchen", "Al's Breakfast", "Alma", "French Meadow Bakery"];
let madisonRestaurants = ["Graze", "Gotham Bagels", "Tipsy Cow", "Cento"];
let chicagoRestaurants = ["Avec", "Redhot Ranch", "Lou Malnati's", "Bluebird Cafe"];
let greenBayRestaurants = ["Angelina", "Hagemeister Park", "Black Stone", "The Creamery Downtown"];

//we will use this one function to randomly select from each array. giving us a random value for destination, transportation, restaurant, etc.
function chooseRandomElement(arrayToSelectFrom){
  let chooseRandomElement = arrayToSelectFrom[Math.floor(Math.random() * arrayToSelectFrom.length)];
  return chooseRandomElement;
}

function pickCorrectRestaurantArray(destination){
  switch(destination){
    case "Chicago":
      return chicagoRestaurants;
    case "Minneapolis":
      return minneapolisRestaurants;
    case "Madison":
      return madisonRestaurants;
    case "Green Bay":
      return greenBayRestaurants;
  }
}

//this function will pick a random activity from each array and return them in a new array
function chooseActivities(destinations, transportation, entertainment){
  let randomDestination = chooseRandomElement(destinations);
  let randomTransport = chooseRandomElement(transportation);
  let randomEntertainment = chooseRandomElement(entertainment);
  let randomRestaurant = chooseRandomElement(pickCorrectRestaurantArray(randomDestination));

  return [randomDestination, randomTransport, randomEntertainment, randomRestaurant];
}

function startProgram(){
  let userTravelResponse = window.confirm("Would you like to generate a day trip plan? Click OK to confirm or Cancel to opt out!");
  if(userTravelResponse){
    let isUserHappy = false;
    let itenerary;
    
    while(!isUserHappy){   //we want to stop this loop once the user is happy with the itenerary
    itenerary = chooseActivities(destinationsArray, transportationArray, entertainmentArray);
    userTravelResponse = window.confirm("We suggest going to " + itenerary[0] + " by " + itenerary[1] + "! Once you are there, we suggest " + itenerary[2] + ". For dinner we recommend eating at " + itenerary[3] + "! Do you like this itenerary or would you like to change it? Click OK to confirm your itenerary and print it to the console or Cancel for a new itenerary!" );
  
    if(userTravelResponse){
      isUserHappy = true;
      console.log("We suggest going to " + itenerary[0] + " by " + itenerary[1] + "! Once you are there, we suggest " + itenerary[2] + ". For dinner we recommend eating at a " + itenerary[3] + "!");
      } 
    }
  }
  else{
    alert("Check us out next time you want a travel itenerary!");
  }
}

startProgram();
