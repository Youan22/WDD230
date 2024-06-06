const apiKey = "7a92298dddfaa45a162fd24af9242760";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=${apiKey}&units=metric`;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output the results to the console for testing
      displayResults(data); // Call displayResults function to update the DOM
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error); // Output any errors to the console
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Display the temperature
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Construct the icon URL
  let desc = data.weather[0].description; // Get the weather description

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

// Call the apiFetch function to fetch and display the weather data
apiFetch();
