const API_KEY = `148a92cae44b519727465e5e50d4c90f
`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    const showTemperature = document.getElementById("temperature");
    showTemperature.innerText = data.main.temp;
    console.log(data.main.temp);
}
loadTemperature('dhaka');