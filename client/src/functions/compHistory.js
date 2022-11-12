
function compHistory(company,monthIter) {
    var currentTimeInSeconds=Math.floor(Date.now()/1000);
    let startTime = currentTimeInSeconds - (2592000*monthIter)
    var chart = []

    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c7r1k2qad3ia6nr4u7r0"
    const finnhubClient = new finnhub.DefaultApi()
    finnhubClient.stockCandles(company, "D", startTime, currentTimeInSeconds, (error, data, response) => {
        for (let i = 0; i < data.c.length; i++) {
            const fs = require('fs');
            const milliseconds = (data.t[i]) * 1000
            var dateObject = new Date(milliseconds)
            const temp = JSON.stringify(dateObject)
            fs.writeFile('APPL.json', temp, (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
            });
            chart.push({x: temp.slice(6,11),y: data.c[i]})
        }
        console.log(chart)
        return chart
        })
}

export default compHistory;