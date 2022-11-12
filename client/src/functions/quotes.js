function quotes(company) {
    // const finnhub = require('finnhub');

    // const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    // api_key.apiKey = "c7qobl2ad3ia6n"
    // const finnhubClient = new finnhub.DefaultApi()

    // finnhubClient.quote(company, (error, data, response) => {
    // console.log(data)
    // });
    // // return data.c
    switch(company) {
        case "APPL":
            return 170.33
        case "DIS":
            return 138.63
        case "MCD":
            return 256.09
        case "NKE":
            return 145.91
        case "GME":
            return 97.91
        case "KO":
            return 60.84
        case "FB":
            return 301.71
        case "GOOGL":
            return 2667.020
        case "TSLA":
            return 846.35
        case "NFLX":
            return 384.36
    }
}

export default quotes;
