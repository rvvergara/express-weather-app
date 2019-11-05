const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geoCode = require('./utils/geocode');
const foreCast = require('./utils/forecast');

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const app = express();
const port = process.env.PORT || 3000;

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
  const { city } = req.query;

  if (!city) {
    return res.json({
      error: 'City must be provided',
    });
  }

  return geoCode(city, (err, { location, lat, long } = {}) => {
    if (err) {
      return res.send({
        error: err,
      });
    }
    return foreCast(lat, long, (error, forecast) => {
      if (error) {
        return res.send({
          error,
        });
      }
      return res.send({
        location,
        ...forecast,
      });
    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'No search term provided',
    });
  }
  console.log(req.query);
  return res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', { title: '404', name: 'Ryan V', error: 'Help article not found' });
});

app.get('*', (req, res) => {
  res.render('404', { title: '404', name: 'Ryan V', error: 'Page not found' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
