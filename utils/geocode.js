const request = require("postman-request");

const getGeoCode = (address, callback) => {
    const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmVoYWNoYXVoYW4xNCIsImEiOiJjanR3bWdiZjYxdHE1NDRsODBvamcyMGdmIn0.bNj-3zibyCQOt8lZ9wsbvQ`;

    request(geoCodeUrl, {json: true}, (error, response) => {
        if(error) {
            callback(error);
        } else if (response && response.body && response.body.message) {
            callback(response.body.message);
        }else if (response && response.body.features && !response.body.features.length) {
            callback('Please search for a valid location');
        } else {
            const latitude = response.body.features[0].center[0];
            const longitude = response.body.features[0].center[1];
            callback(undefined, {latitude, longitude});
        }
    });
}

module.exports = getGeoCode