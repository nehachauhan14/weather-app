const request = require("postman-request");

const forecast = (lattitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/forecast?access_key=1936a389f623822221f7c3aa79d0d218&query=${lattitude},${longitude}&units=f`;
    request(url, { json: true }, (error, response) => {
        if(error) {
            callback("Unable to connect to weather service!", undefined);
        } else if(response.body.error) {
            callback(undefined, response.body.error.info);
        } else {
            const data = response.body;
            callback(undefined, `${data.current.weather_descriptions[0]} .It is currently ${data.current.temperature} and it feels like ${data.current.feelslike}`);
        }
    });
};

module.exports = forecast
