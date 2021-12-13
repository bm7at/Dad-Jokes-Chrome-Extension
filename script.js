   
    const fetchReq1 = fetch("https://alpha-vantage.p.rapidapi.com/query?from_currency=AXS&function=CURRENCY_EXCHANGE_RATE&to_currency=EUR", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "44e9429670msh9c791f5e420c90cp1c8193jsndaf15587938e"
        }
    })
    .then(response => response.json());
    
    const fetchReq2 = fetch("https://axie-infinity.p.rapidapi.com/get-update/0x4d6bc958dbf892e846fff08552c17b74e9c1ce01?id=0x4d6bc958dbf892e846fff08552c17b74e9c1ce01", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "axie-infinity.p.rapidapi.com",
        "x-rapidapi-key": "44e9429670msh9c791f5e420c90cp1c8193jsndaf15587938e"
    }
    })
    .then(response => response.json());

    const allData = Promise.all([fetchReq1, fetchReq2])

    allData.then(dataRate => {
      //console.log(dataRate)
      //const jokeText = jokeData.attachments[0].text;
      //console.log(dataRate['Realtime Currency Exchange Rate']['5. Exchange Rate'])
        console.log(dataRate);
    const axsPrice = dataRate[0]['Realtime Currency Exchange Rate']['5. Exchange Rate'];
    const slpPrice = dataRate[1]['slp']['total'];
    console.log(axsPrice + "\n" + slpPrice);



      /*
      const num = dataRate['Realtime Currency Exchange Rate']['5. Exchange Rate'];

      const newnum = Math.sign(num) * (Math.round((Math.abs(num) + Number.EPSILON) * 1e2) / 1e2);
      response(newnum);
      */   
  })