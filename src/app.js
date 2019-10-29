const express = require('express');
const path = require('path');

const publicDirPath = path.join(__dirname, '../public');
const app = express();
app.use(express.static(publicDirPath));

app.get('/about', (req, res) => {
  res.sendFile(`${publicDirPath}/about.html`);
});

app.get('/help', (req, res) => {
  res.sendFile(`${publicDirPath}/help.html`);
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
