let getWeatherInfo = async (city) => {
  try{
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&units=metric`;
  let res = await axios.get(weatherUrl);
  return res;
  }
  catch{
    alert("enter valid city name");
  }
};
let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  let city = document.querySelector("input");
  let res = await getWeatherInfo(city.value);
  insertInfo(res, city.value);
  city.value = "";
});
let lowtempUrl =
  "https://images.unsplash.com/photo-1483835724473-d69ca66efb25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let hightempUrl =
  "https://images.unsplash.com/photo-1628341737358-8d97728f6da5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let rainyUrl =
  "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function insertInfo(res, city) {
  let description = document.querySelector(".description");
  description.innerText = `Weather is ${res.data.weather[0].description} and temperature feels like ${res.data.main.feels_like}\u00B0C`;
  let cityName = document.querySelector(".city-name");
  cityName.innerText = city.toUpperCase();
  let temp = document.querySelector(".temp");
  temp.innerText = `Temperature is ${res.data.main.temp}\u00B0C`;
  let tempMin = document.querySelector(".temp-min");
  tempMin.innerText = `Minimum Temperature is ${res.data.main.temp_min}\u00B0C`;
  let tempMax = document.querySelector(".temp-max");
  tempMax.innerText = `Maximum Temperature is ${res.data.main.temp_max}\u00B0C`;
  let humidity = document.querySelector(".humidity");
  humidity.innerText = `Humidity is ${res.data.main.humidity}%`;
  let img = document.querySelector("img");
  if(res.data.main.humidity > 80){
    img.setAttribute("src", rainyUrl);
  }
  else if (res.data.main.temp > 15){
    img.setAttribute("src", hightempUrl);
  }
  else {
    img.setAttribute("src", lowtempUrl);
  }
  let windSpeed = document.querySelector(".wind-speed");
  windSpeed.innerText = `Wind speed is ${res.data.wind.speed}km/h`;
}
