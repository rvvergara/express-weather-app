const request = require('request');

const foreCast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/11ccf9b69a2309d3b0c033170e50db89/${lat},${long}?units=si`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback(err);
    } else {
      const { currently, daily } = body;
      const { summary } = daily;
      const { temperature, precipProbability } = currently;
      callback(err, { temperature, precipProbability, summary });
    }
  });
};

module.exports = foreCast;
