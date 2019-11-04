const fetchWeather = async (city) => {
  const res = await fetch(`/weather?city=${city}`);
  const data = await res.json();
  return data;
};

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = e.target.elements[0].value;
  const heading = document.querySelector('#heading');
  const temp = document.querySelector('#temperature');
  const precip = document.querySelector('#precipitation');
  const sum = document.querySelector('#summary');
  const loading = document.querySelector('#loading');
  [...document.getElementsByTagName('p')].forEach((el) => el.innerHTML = '');
  loading.innerText = 'Fetching weather...';
  const data = await fetchWeather(city);
  const {
    error, location, summary, precipProbability, temperature,
  } = data;
  if (error) {
    heading.innerText = error.error || error;
  } else {
    heading.innerText = location;
    temp.innerHTML = `<strong>Temperature: </strong>${temperature}&deg;C`;
    sum.innerText = summary;
    precip.innerHTML = `<strong>Precipitation: </strong> ${precipProbability}`;
  }
  loading.innerText = '';
  e.target.reset();
});
