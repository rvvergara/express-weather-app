const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const app = express();

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Know The Weather',
    name: 'Ryan V',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Ryan V',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Ryan V',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Bacoor, Cavite',
    forecast: 'Sunny',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', { title: '404', name: 'Ryan V', error: 'Help article not found' });
});

app.get('*', (req, res) => {
  res.render('404', { title: '404', name: 'Ryan V', error: 'Page not found' });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
