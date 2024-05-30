// Select HTML Elements In The Document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#weather-icon');

// Create Required Variables For The URL
const myKey = '7a92298dddfaa45a162fd24af9242760';
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=42.91&lon=-76.7900&appid=${myKey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      let data = await response.json();
      console.log(data); // Testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  myTemperature.innerHTML = `${data.main.temp}&deg;F`; // Display the temperature in Fahrenheit
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Construct the icon URL
  let desc = data.weather[0].description; // Get the weather description

  myGraphic.setAttribute('src', iconSrc);
  myGraphic.setAttribute('alt', desc);
  myDescription.textContent = desc;
  myTown.textContent = data.name; // Display the town name
}

apiFetch();
