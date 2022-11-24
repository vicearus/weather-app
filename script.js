//Load on start
//  saved favorites
//Event Listeners
//  search button
//API fetch

// var weatherAPI = "api.openweathermap.org/data/2.5/weather?q=London&appid=47ad9e2dde88e542dc0770715c92a072"
var key = "&appid=47ad9e2dde88e542dc0770715c92a072"
// var weatherAPI = "api.openweathermap.org/data/2.5/weather?q=London" + key
// var weatherAPI = "api.openweathermap.org/data/2.5/forecast"+ key
weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?q=sacramento&appid=47ad9e2dde88e542dc0770715c92a072"
fetch(weatherAPI)
	.then(function (random) {
	return (random)
})
	.then(function (data) {
	console.log(data)
})