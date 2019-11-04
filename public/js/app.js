const fetchWeather = async (city) => {
  const res = await fetch(`/weather?city=${city}`);
  const data = await res.json();
  return data;
};

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = e.target.elements[0].value;
  const data = await fetchWeather(city);
  const {
    error, location, summary, precipProbability, temperature,
  } = data;
  if (error) {
    console.log({ error: error.error });
  } else {
    console.log({
      location, summary, temperature, precipProbability,
    });
  }
  e.target.reset();
});
