"use strict"

let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    image : 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Golden_Gate_Bridge_%28CA%29.jpeg',
    cities: ["Los Angeles", "San Francisco", "San Diego"]

 },
 {
    state: "Colorado",
    stateAbbr: "CO",
    image: 'https://cdn.wallpapersafari.com/41/96/AbcIm5.jpg',
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
 },
 {
    state: "Texas",
    stateAbbr: "TX",
    image: 'https://tpwd.texas.gov/backgrounds/images/cowgirl_bg.jpg',
    cities: ["Austin", "Dallas", "Houston", "San Antonio"]
 }
];

window.onload = function () {
    // This function loads the state dropdown menu, called when the page loads
    loadStatesDropdown();
    // this functions connect the onchange event handler for the states dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    statesDropdown.onchange = onStatesDropdownChanged;
    
     // this functions connects the onchange event handler for the cities dropdown
    const citiesDropdown = document.getElementById("citiesDropdown");
    citiesDropdown.onchange = onCitiesDropdownChanged;
    
}

// this is the function that loads the states dropdown
function loadStatesDropdown() {

    //create the default option
    let select1OneOption = new Option("Select one...", "");
    statesDropdown.appendChild(select1OneOption);

    //this loop populates the states
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = new Option(cityStates[i].state, cityStates[i].stateAbbr);
      statesDropdown.appendChild(theOption);
    }
    //this function populates the select the state first in the cities dropdown before the 
    addSelectStateFirstOptionToCityDropdown()
}



function onStatesDropdownChanged() {
    // find the league and team dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    

    //remove the previous teams from the team drop down
    citiesDropdown.options.length = 0;
    // find the league dropdown selection value
    let selectedStatesAbbr = statesDropdown.value;

    //find the message paragraph
    const messagePara = document.getElementById("messagePara");
    //erase previous team message
    messagePara.innerHTML = "";


    //check if they picked select one/call function
    if (selectedStatesAbbr == "") {
        addSelectStateFirstOptionToCityDropdown();
        return;
    }

    //go use the selected leagueCode to find the matching league from the array
    let matchingCity = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStatesAbbr);
    //change the background when the state changes
    document.body.style.backgroundImage = "url("+matchingCity.image+")";
    //create the select1one option
    let select1OneOption = new Option("Select one...", "");
    citiesDropdown.appendChild(select1OneOption);
    //loop through the cities in the matching states and create option elements for each
    for (let i = 0; i < matchingCity.cities.length; i++) {
        let theOption = new Option(matchingCity.cities[i]);
        citiesDropdown.appendChild(theOption);
    }

}

//function that 
function onCitiesDropdownChanged() {
    // find the league and team dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    //find the message paragraph
    const messagePara = document.getElementById("messagePara");
    //erase previous team message
    messagePara.innerHTML = "";

    //get the selected city
    let selectedCity = citiesDropdown.value;
    //if select one is picked, exit the function
    if (selectedCity == "") {
        return;
    }
    //get the selected league
    let selectedStateIndex = statesDropdown.selectedIndex;
    let selectedState = statesDropdown.options[selectedStateIndex].text;

    let message = "City: " + selectedCity + "<br>" +
        "State: " + selectedState
    messagePara.innerHTML = message;
}



function addSelectStateFirstOptionToCityDropdown() {
    const citiesDropdown = document.getElementById("citiesDropdown");
    //populate it with a select league phrase
    let select1OneOption = new Option("Select the State first...", "");
    citiesDropdown.appendChild(select1OneOption);

}

