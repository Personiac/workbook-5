"use strict";

let statesInfo = [
  {
    state: "California",
    cities: ["San Diego", "San Francisco", "Santa Barbara", "Monterey", "Redwood City"],
  },
  {
    state: "Maryland",
    cities: ["Leonardtown", "St Leonard", "St Mary's City", "Annapolis", "Ocean City"],
  },
  {
    state: "Texas",
    cities: ["San Antonio", "Austin", "Pflugerville", "Dallas", "Ft Worth", "Paris", "Athens"],
  },
];

// function displayStates(states) {
//     for (const stateProfile of states) {
//         console.log(stateProfile.state);
//         console.log("---------");
//         displayCities(stateProfile.cities);
//         console.log();
//     }
// }

function getAllCities(stateInfo) {
  let cities = [];
  for (const state of stateInfo) {
      cities = cities.concat(state.cities);
  }
  return cities;
}


function displayStates() {
  let cities = getAllCities(statesInfo);
  let sanCities = cities.filter(function (city) {
    return city.startsWith("San");
  });
  return sanCities;
}

let sanCities = displayStates();
console.log(sanCities);

function displayCities(cities) {
  for (const city of cities) {
    console.log(city);
  }
}

displayStates(statesInfo);
