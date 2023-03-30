const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "36556cf440msh8792b1fdebab10cp15f842jsnbe8ef0bf0439",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      //   cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
  cityName.innerHTML = city.value;
});

getWeather("Delhi");

// ======= Manali =========
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Manali",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    humidityManali.innerHTML = response.humidity;
    tempManali.innerHTML = response.temp;
    wind_speedManali.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

// ======= Lucknow =========

fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      humidityLucknow.innerHTML = response.humidity;
      tempLucknow.innerHTML = response.temp;
      wind_speedLucknow.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));


// ======= Banglore =========

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    humidityBangalore.innerHTML = response.humidity;
    tempBangalore.innerHTML = response.temp;
    wind_speedBangalore.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));


// ======= Kolkata =========

fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      humidityKolkata.innerHTML = response.humidity;
      tempKolkata.innerHTML = response.temp;
      wind_speedKolkata.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));


// ======= Noida =========

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    humidityNoida.innerHTML = response.humidity;
    tempNoida.innerHTML = response.temp;
    wind_speedNoida.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));


// ======= Mumbai =========


fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    humidityMumbai.innerHTML = response.humidity;
    tempMumbai.innerHTML = response.temp;
    wind_speedMumbai.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
