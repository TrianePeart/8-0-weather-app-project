document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.search.value;
    const weather = `https://wttr.in/${input}?format=j1`;

fetch(weather)
.then((response) => response.json())
.then((obj) => {
const display = document.querySelector(".display p");
const area = obj.nearest_area[0].areaName[0].value;
const region = obj.nearest_area[0].region[0].value;
const country = obj.nearest_area[0].country[0].value;;
const currently = obj.current_condition[0].FeelsLikeF;
    display.innerHTML = `<h3>${input}</h3><p><strong>Area: </strong>${area}</p><p><strong>Region: </strong>${region}</p><p><strong>Country: </strong>${country}</p><p><strong>Currently: </strong>${currently}°F</p>`


const tyAverage = obj.weather[0].avgtempF;
const tyMax = obj.weather[0].maxtempF;
const tyMin = obj.weather[0].mintempF;
const today = document.querySelector("#today");
    today.innerHTML = `<h3>Today</h3><p>AverageTemp: ${tyAverage}°F</p><p>MaxTemp: ${tyMax}°F</p><p>MinTemp: ${tyMin}°F</p>`

const twAverage = obj.weather[1].avgtempF;
const twMax = obj.weather[1].maxtempF;
const twMin = obj.weather[1].mintempF;
const tomorrow = document.querySelector("#tomorrow");
    tomorrow.innerHTML = `<h3>Tomorrow</h3><p>AverageTemp: ${twAverage}°F</p><p>MaxTemp: ${twMax}°F</p><p>MinTemp: ${twMin}°F</p>`

const daAverage = obj.weather[2].avgtempF;
const daMax = obj.weather[2].maxtempF;
const daMin = obj.weather[2].mintempF;
const dayAfter = document.querySelector("#dayAfter");

    dayAfter.innerHTML = `<h3>DayAfter</h3><p>AverageTemp: ${daAverage}°F</p><p>MaxTemp: ${daMax}°F</p><p>MinTemp: ${daMin}°F</p>`

})
.catch(console.log)
event.target.reset();
})

