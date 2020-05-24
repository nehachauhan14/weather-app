const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };

        callback(data);
    })
};

geoCode("New Delhi", data => {
    console.log("Return value", data);
});

const add = (one, two, callback) => {
    setTimeout(() => {
        callback(one + two);
    }, 2000);
};

add(1, 4, sum => {
    console.log("sum", sum);
});
