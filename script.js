const apiKey = "8f54b55aa094533082767f5822144bda"
async function getWeather() {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
	const response = await fetch(apiUrl)
	if(!response.ok){
	    throw new Error(error);
	}
	return response.json()
}

document.getElementById("myBtn").onclick = async () => {
	const response = await getWeather()
	document.getElementById("myP1").textContent = `Current weather in London: ${response.weather[0].description}`
}