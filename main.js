
let form = document.querySelector("form")


function fetchWeather(city){

    const weather = `https://wttr.in/${city}?format=j1`;
    
    return fetch(weather)
    .then((response) => response.json())
   
    }
    
    function updateHistory(obj, userInput){

        document.querySelector(".history p").classList.add("this");
        
        

        const currently = obj.current_condition[0].FeelsLikeF;

        let ul = document.querySelector("ul")

        let li = document.createElement("li")
        
        li.innerHTML = `<a href = "#"><b>${userInput}</b></a> - ${currently}°F`;
        
        ul.append(li)

        li.addEventListener("click", (event) =>{
            event.preventDefault()
            fetchWeather(userInput).then((obj) => {
                

                displayUpdate(obj, userInput)
            })
        })
    }
    
    function displayUpdate(obj, userInput) {
        const display = document.querySelector(".view");
        const area = obj.nearest_area[0].areaName[0].value;
        const region = obj.nearest_area[0].region[0].value;
        const country = obj.nearest_area[0].country[0].value;;
        const currently = obj.current_condition[0].FeelsLikeF;
        display.innerHTML = `<h3>${userInput}</h3><p><strong>Area: </strong>${area}</p><p><strong>Region: </strong>${region}</p><p><strong>Country: </strong>${country}</p><p><strong>Currently: </strong>${currently}°F</p>`
        
        const averageTem = obj.weather[0].avgtempF;
        const maxTemp = obj.weather[0].maxtempF;
        const minTemp = obj.weather[0].mintempF;
        const today = document.querySelector("#today");
        today.innerHTML = `<h3>Today</h3><p><strong>Projected Temp: </strong>${averageTem}°F</p><p><strong>High of: </strong>${maxTemp}°F</p><p><strong>Low of: </strong>${minTemp}°F</p>`
        
        const twAverage = obj.weather[1].avgtempF;
        const twMax = obj.weather[1].maxtempF;
        const twMin = obj.weather[1].mintempF;
        const tomorrow = document.querySelector("#tomorrow");
        tomorrow.innerHTML = `<h3>Tomorrow</h3><p><strong>Projected Temp: </strong>${twAverage}°F</p><p><strong>High of: </strong>${twMax}°F</p><p><strong>Low of: </strong>${twMin}°F</p>`
        
        const daAverage = obj.weather[2].avgtempF;
        const daMax = obj.weather[2].maxtempF;
        const daMin = obj.weather[2].mintempF;
        const dayAfter = document.querySelector("#dayAfter");
        dayAfter.innerHTML = `<h3>Day After</h3><p><strong>Projected Temp: </strong>${daAverage}°F</p><p><strong>High of: </strong>${daMax}°F</p><p><strong>Low of: </strong>${daMin}°F</p>`
    }


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let city = form.search.value
        let userInput= city[0].toUpperCase() + city.slice(1)
        fetchWeather(userInput).then((obj) => {
            displayUpdate(obj, userInput)
            updateHistory(obj, userInput)
      
    }) 
       form.search.value = "";  
    });