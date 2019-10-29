const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>HELLO FROM EXPRESS</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>ABOUT PAGE</h1>');
});

app.get('/help', (req, res) => {
  res.send('THIS IS THE HELP PAGE');
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
