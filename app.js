document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch( city ) {
	var key = '930dec14350f0c635b5826e9a673ba1e';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
		return resp.json()
	}) // Convert data to json
	.then(function(data) {
		console.log(data);
	})
	.catch(function() {
		// catch any errors
	})
}

function cityWeather(e) {
	weatherDataFetch( 'Tallinn' );
}