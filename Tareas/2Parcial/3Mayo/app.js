const request = require('request');

request({
    url: 'http://maps.google.com/maps/api/geocode/json?address=%20268ismaelaguayo28979',
    json: true
}, (error, response, body)=> {
    // console.log(body)
    // console.log(JSON.stringify(body,undefined,2))
    console.log(`Address: ${body.results[0].formatted_address} `)
});