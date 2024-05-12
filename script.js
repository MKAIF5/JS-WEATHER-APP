let getInput = document.getElementById("inp");
let city = document.getElementById("city");
let temperature = document.getElementById("temp");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (getInput.value != "") {
    searchWeather();
  }
});

let id = "9505fd1df737e20152fbd78cdb289b6a"
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid" + id

const searchWeather = () =>{
    fetch(url )
    .then(responsive => responsive.json())
    .then(data =>{
        console.log((data));
    })
}