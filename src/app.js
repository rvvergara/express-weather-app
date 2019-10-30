const express = require('express');
const path = require('path');

const publicDirPath = path.join(__dirname, '../public');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Weather App',
    name: 'Ryan V',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Bacoor, Cavite',
    forecast: 'Sunny',
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
