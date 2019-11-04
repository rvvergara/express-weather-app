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
  const data = await fetchWeather(city);
  const {
    error, location, summary, precipProbability, temperature,
  } = data;
  if (error) {
    heading.innerText = error.error || error;
  } else {
    heading.innerText = location;
    forecast.innerHTML = `${summary} It is ${temperature}&deg;C out. There is ${Math.round(precipProbability * 100)}% chance of rain.`;
  }
  loading.innerText = '';
  e.target.reset();
});
