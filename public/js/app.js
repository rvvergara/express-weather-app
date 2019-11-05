const fetchWeather = async (city) => {
  const res = await fetch(`/weather?city=${city}`);
  const data = await res.json();
  return data;
};

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = e.target.elements[0].value;
  const heading = document.querySelector('#heading');
  const forecast = document.querySelector('#forecast');
  const loading = document.querySelector('#loading');
  forecast.innerHTML = '';
  loading.innerText = 'Fetching weather...';
  heading.innerHTML = '';
  const data = await fetchWeather(city);
  const {
    error, location, summary, precipProbability, temperature, temperatureLow, temperatureHigh,
  } = data;
  if (error) {
    heading.innerText = error.error || error;
  } else {
    heading.innerText = location;
    forecast.innerHTML = `${summary} The average temperature is ${temperature}&deg;C with high of ${temperatureHigh}&deg;C and low of ${temperatureLow}&deg;C. There is ${Math.round(precipProbability * 100)}% chance of rain.`;
  }
  loading.innerText = '';
  e.target.reset();
});
