"use strict"

let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Golden_Gate_Bridge_%28CA%29.jpeg',
    cities: [{ name: "Los Angeles", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz"] },
    { name: "San Francisco", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "W"] },
    { name: "San Diego", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "Best Western"] },]
},
{
    state: "Colorado",
    stateAbbr: "CO",
    image: 'https://cdn.wallpapersafari.com/41/96/AbcIm5.jpg',
    cities: [{ name: "Aspen", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz"] },
    { name: "Boulder", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "W"] },
    { name: "Denver", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "Best Western"] },
    { name: "Pagosa Springs", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "Best Western"] }]
},
{
    state: "Texas",
    stateAbbr: "TX",
    image: 'https://tpwd.texas.gov/backgrounds/images/cowgirl_bg.jpg',
    cities: [{ name: "Austin", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz"] },
    { name: "Dallas", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "W"] },
    { name: "Houston", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "Best Western"] },
    { name: "San Antonio", image: "xxx", hotels: ["Marriot", "Hilton", "Ritz", "Best Western"] }]
},
];

window.onload = function () {
    // This function loads the state dropdown menu, called when the page loads
    loadStatesDropdown();
    // this functions connects the onchange event handler for the states dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    statesDropdown.onchange = onStatesDropdownChanged;
    // this functions connects the onchange event handler for the cities dropdown   
    const citiesDropdown = document.getElementById("citiesDropdown");
    citiesDropdown.onchange = onCitiesDropdownChanged;

    // this functions connects the onchange event handler for the hotels dropdown
    const hotelsDropdown = document.getElementById("hotelsDropdown");
    hotelsDropdown.onchange = onhotelsDropdownChanged;

}

// this is the function that loads the states dropdown
function loadStatesDropdown() {

    //We are creating the default "Select one function"
    let select1OneOption = new Option("Select one...", "");
    statesDropdown.appendChild(select1OneOption);
    

    //this loop populates the state dropdown menu
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = new Option(cityStates[i].state, cityStates[i].stateAbbr);
        statesDropdown.appendChild(theOption);
    }
    //this function populates the select "the state first" in the cities dropdown before the 
    addSelectStateFirstOptionToCityDropdown()
    const hotelsDropdown = document.getElementById("hotelsDropdown");
    let select2OneOption = new Option("Select the City and State first...", "");
    hotelsDropdown.appendChild(select2OneOption);
}



function onStatesDropdownChanged() {
    // finding all the dropdowns
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    const hotelsDropdown = document.getElementById("hotelsDropdown");


    //removing previous selections from the cities and hotels dropdown
    citiesDropdown.options.length = 0;
    hotelsDropdown.options.length = 0;
    // finding the states dropdown value
    let selectedStatesAbbr = statesDropdown.value;

    //find the paragraph where the message is to be displayed
    const messagePara = document.getElementById("messagePara");
    //we are erasing the previous message here
    messagePara.innerHTML = "";


    //checking if they picked the default selection
    if (selectedStatesAbbr == "") {
        addSelectStateFirstOptionToCityDropdown();
        const hotelsDropdown = document.getElementById("hotelsDropdown");
        let select1OneOption = new Option("Select the City first...", "");
        hotelsDropdown.appendChild(select1OneOption);
        return;
    }

    //finding the matching states from the cityStates Array
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStatesAbbr);
    //change the background when the state changes
    document.body.style.backgroundImage = "url(" + matchingState.image + ")";
    //create the default select1one options 
    let select1OneOption = new Option("Select one...", "");
    citiesDropdown.appendChild(select1OneOption);
    let select2OneOption = new Option("Select the City first...", "");
    hotelsDropdown.appendChild(select2OneOption);
    //loop through the cities in the matching states and create option elements for each
    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = new Option(matchingState.cities[i].name, matchingState.cities[i].name);
        citiesDropdown.appendChild(theOption);
    }

}

//function that controls what happens when the cities dropdown changes.
function onCitiesDropdownChanged() {
    // find the league and team dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    const hotelsDropdown = document.getElementById("hotelsDropdown");

    hotelsDropdown.options.length = 0;
    //find the message paragraph
    const messagePara = document.getElementById("messagePara");
    //erase previous team message
    messagePara.innerHTML = "";

    //get the selected city
    let selectedCity = citiesDropdown.value;
    //if select one is picked, exit the function
    if (selectedCity == "") {
        const hotelsDropdown = document.getElementById("hotelsDropdown");
        let select1OneOption = new Option("Select the City first...", "");
        hotelsDropdown.appendChild(select1OneOption);
        return;
    }

    //go use the selected leagueCode to find the matching league from the array
    let selectedStatesAbbr = statesDropdown.value;
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStatesAbbr);
    let matchingCity = matchingState.cities.find(arrayElement => arrayElement.name == selectedCity);
    //change the background when the state changes
    //create the select1one option
    let select1OneOption = new Option("Select one...", "");
    hotelsDropdown.appendChild(select1OneOption);
    //loop through the cities in the matching states and create option elements for each
    for (let i = 0; i < matchingCity.hotels[i].length; i++) {
        let theOption = new Option(matchingCity.hotels[i]);
        hotelsDropdown.appendChild(theOption);
    }

}


function onhotelsDropdownChanged() {
    // find the league and team dropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    const hotelsDropdown = document.getElementById("hotelsDropdown");
    //find the message paragraph
    const messagePara = document.getElementById("messagePara");
    //erase previous team message
    messagePara.innerHTML = "";

    //get the selected hotel
    let selectedHotel = hotelsDropdown.value;
    //if select one is picked, exit the function
    if (selectedHotel == "") {
        return;
    }
    //get the selected city
    let selectedStateIndex = statesDropdown.selectedIndex;
    let selectedState = statesDropdown.options[selectedStateIndex].text;
    let selectedCityIndex = citiesDropdown.selectedIndex;
    let selectedCity = citiesDropdown.options[selectedCityIndex].text;
    

    let message = "City: " + selectedCity + "<br>" +
        "State: " + selectedState + "<br>" + "Hotel: " + selectedHotel
    messagePara.innerHTML = message;
}


function addSelectStateFirstOptionToCityDropdown() {
    const citiesDropdown = document.getElementById("citiesDropdown");
    //populate it with a select league phrase
    let select1OneOption = new Option("Select the State first...", "");
    citiesDropdown.appendChild(select1OneOption);

}


