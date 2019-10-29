const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO FROM EXPRESS');
});

app.get('/about', (req, res) => {
  res.send('THIS IS THE ABOUT PAGE');
});

app.get('/help', (req, res) => {
  res.send('THIS IS THE HELP PAGE');
});

app.get('/weather', (req, res) => {
  res.send('THIS IS THE WEATHER PAGE');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
