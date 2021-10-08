document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.search.value;
fetch(`https://wttr.in/${input}?format=j1`)
.then((response) => response.json())
.then((obj) => {
    const display = document.querySelector(".display");

    const area = obj.nearest_area[0].areaName[0].value;
    const region = obj.nearest_area[0].region[0].value;
    const country = obj.nearest_area[0].country[0].value;;
    const currently = obj.current_condition[0].FeelsLikeF;

    display.textContent = `${input} Area: ${area} Region: ${region} Country: ${country} Currently: Feels like ${currently}°F`
})
.catch(() => 

{

})
event.target.reset();
});
