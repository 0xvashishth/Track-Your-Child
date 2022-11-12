function netReturn(company) {
    // var currentTimeInSeconds=Math.floor(Date.now()/1000);
    // var startTime = currentTimeInSeconds - 86400*3
    // const finnhub = require('finnhub');
    // var net = 0

    // const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    // api_key.apiKey = "c7r1k2qad3ia6nr4u7r0"
    // const finnhubClient = new finnhub.DefaultApi()

    // finnhubClient.stockCandles(company, "D", startTime, currentTimeInSeconds, (error, data, response) => {

    //     net = data.c[1] - data.c[0]
    //     console.log(data.c[1])
    //     console.log(data.c[0])
    // });
    switch(company) {
        case "APPL":
            return 170.33 - 159.22
        case "DIS":
            return 138.63 - 135.42
        case "MCD":
            return 256.09 - 248.74
        case "NKE":
            return 145.91 - 144.64
        case "GME":
            return 97.91 - 93.52
        case "KO":
            return 60.84 - 59.65
        case "FB":
            return 301.71 - 294.64
        case "GOOGL":
            return 2667.02 - 2580.1
        case "TSLA":
            return 846.35 - 829.1
        case "NFLX":
            return 384.36 - 386.7
    }

}

export default netReturn;