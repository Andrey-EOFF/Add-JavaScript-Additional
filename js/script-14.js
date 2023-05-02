fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Kyiv&limit=5&appid=d5ec5d7e083b563e4f1bc8a043590633"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".mb-0").textContent = data.name;
    document.querySelector(".display-2").innerHTML =
      Math.round(data.main.temp - 273) + "&deg;";
    document.querySelector(".show").textContent =
      data.weather[0]["description"];
    document.querySelector(".feel-likes").innerHTML =
      Math.round(data.main.feels_like - 273) + "&deg;";
  })
  .catch(function () {
    // catch any errors
  });
