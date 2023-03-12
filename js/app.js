// DO NOT use api key publicly. we use it here just to practice
const API_KEY = `148a92cae44b519727465e5e50d4c90f
`;

// function to load temperature data from api using api key
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

// funciton to display temperature
const displayTemperature = data => {
    const showTemperature = document.getElementById("temperature");
    showTemperature.innerText = data.main.temp;
    // console.log(data.main.temp);
    // set weather condition
    document.getElementById("weather-condition").innerText = data.weather[0].main;
}
// initial call: site will show temperature data of 'Dhaka'
loadTemperature('dhaka');

// add event listener to 'search' button
// fetch data based on the search city and display them

document.getElementById('btn-search').addEventListener('click', function(){
    // get input field query data
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city name
    document.getElementById("city-name").innerText = city;
    // now load temperature data for city
    loadTemperature(city);
})