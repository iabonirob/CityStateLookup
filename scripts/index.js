"use strict"

let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego"]
 },
 {
    state: "Colorado",
    stateAbbr: "CO",
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
 },
 {
    state: "Texas",
    stateAbbr: "TX",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"]
 }
];

window.onload = function () {
    // load states dropdown when page first loads
    loadStatesDropdown();
    // conect onchange event handler for the states dropdown (hookup a function to it)
    const statesDropdown = document.getElementById("statesDropdown");
    statesDropdown.onchange = onStatesDropdownChanged;

    const citiesDropdown = document.getElementById("citiesDropdown");
    citiesDropdown.onchange = onCitiesDropdownChanged;


    
}


function loadStatesDropdown() {

    //Add select one option as the default

    let select1OneOption = new Option("Select one...", "");
    statesDropdown.appendChild(select1OneOption);

    //for loop that populates the states par
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = new Option(cityStates[i].state, cityStates[i].stateAbbr);
      statesDropdown.appendChild(theOption);
    }
    //Add a "Select league first..."
    addSelectLeagueFirstOptionToTeamDropdown()

}



function onStatesDropdownChanged() {
    // find the league and team dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    //remove the previous teams from the team drop down
    citiesDropdown.options.length = 0;
    // find the league dropdown selection
    let selectedStatesAbbr = statesDropdown.value;

    //find the message paragraph
    const messagePara = document.getElementById("messagePara");
    //erase previous team message
    messagePara.innerHTML = "";


    //did they pick select one???
    if (selectedStatesAbbr == "") {
        addSelectLeagueFirstOptionToTeamDropdown();
        return;
    }

    //go use the selected leagueCode to find the matching league from the array
    let matchingCity = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStatesAbbr);
    let select1OneOption = new Option("Select one...", "");
    citiesDropdown.appendChild(select1OneOption);
    //loop through the teams in the matching league and create option elements for each
    for (let i = 0; i < matchingCity.cities.length; i++) {
        let theOption = new Option(matchingCity.cities[i]);
        citiesDropdown.appendChild(theOption);

    }
}

function onCitiesDropdownChanged() {
    // find the league and team dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    //find the message paragraph
    const messagePara = document.getElementById("messagePara");
    //erase previous team message
    messagePara.innerHTML = "";

    //get the selected team 
    

    let selectedCity = citiesDropdown.value;


    //if select one is picked, jext exit the function
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



function addSelectLeagueFirstOptionToTeamDropdown() {
    const citiesDropdown = document.getElementById("citiesDropdown");
    //populate it with a select league phrase
    let select1OneOption = new Option("Select the State first...", "");
    citiesDropdown.appendChild(select1OneOption);

}