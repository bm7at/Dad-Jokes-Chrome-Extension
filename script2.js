
/*
fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })
*/
    
fetch("https://alpha-vantage.p.rapidapi.com/query?from_currency=AXS&function=CURRENCY_EXCHANGE_RATE&to_currency=EUR", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
		"x-rapidapi-key": "44e9429670msh9c791f5e420c90cp1c8193jsndaf15587938e"
	}
})
.then(response => response.json())
    .then(dataRate => {
    //console.log(dataRate)
    //const jokeText = jokeData.attachments[0].text;
    //console.log(dataRate['Realtime Currency Exchange Rate']['5. Exchange Rate'])

    const jokeText = dataRate['Realtime Currency Exchange Rate']['5. Exchange Rate'];

    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jokeText;
    
})

/*
.catch(err => {
	console.error(err);
});

*/