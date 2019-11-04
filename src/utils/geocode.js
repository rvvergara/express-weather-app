const request = require('request');

const geoCode = (city, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoicnZ2ZXJnYXJhIiwiYSI6ImNrMmE2cW9iNTE3ZHIzY3BiYTVwaG5rYWkifQ.254LqRf-sIBpRaAJ-VDlbA&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      console.log('ERROR HERE ON GEOCODE');
      callback({ error: err }, null);
    } else if (body.features.length > 0) {
      const { features } = body;
      const { center, place_name } = features[0];
      const long = center[0];
      const lat = center[1];
      callback(null, { long, lat, location: place_name });
    } else {
      callback({ error: `${city} does not exist on earth` });
    }
  });
};

module.exports = geoCode;
