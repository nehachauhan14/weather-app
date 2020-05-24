const forecast = require('./utils/forcast');
const geocode = require('./utils/geocode');

const userInput = process.argv[2] || "";

if(!userInput) {
    console.log("Please provide an address!");
} else {
    console.log("Showing weather forecast for", userInput);
    geocode(userInput, (error, response) => {
        if(error) {
            return console.log("Error", error);
        }   
        const { lattitude, longitude } = response;
    
        forecast(lattitude, longitude , (error, response) => {
            if(error) {
                return console.log("ERROR: ", error);
            } else {
                console.log(response);
            }
        })
    })
}
