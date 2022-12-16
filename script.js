var placeName=document.querySelector('.place').innerHTML;
var temperature=document.querySelector('.temp');
var humidity=document.querySelector('.humidity');
var maxTemp=document.querySelector('.max-temp');
var windSpeed=document.querySelector('.wind');
var placeName=document.querySelector('#input_name');




function search(){
    input=input_name.value;


	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2d395724915147a40b9253d41370cfad`)
	.then(res=>res.json())
	.then(res=>displayWeather(res))
	.catch(error=>console.log(error))
}

function displayWeather(weatherData){
	placeName=weatherData.name;
	var temp=eval((weatherData.main.temp)-273)
	var iconId=weatherData.weather[0].id;

	if(iconId>=200 && iconId<=232){
		icon="http://openweathermap.org/img/wn/11d.png";
	}else if(iconId>=300 && iconId<=321){
		icon="http://openweathermap.org/img/wn/09d.png";
	}else if(iconId>=500 && iconId<=531){
		icon="http://openweathermap.org/img/wn/10d.png";
	}else if(iconId>=600 && iconId<=622){
		icon="http://openweathermap.org/img/wn/13d.png";
	}else if(iconId>=701 && iconId<=781){
		icon="http://openweathermap.org/img/wn/50d.png";
	}else if(iconId==800){
		icon="http://openweathermap.org/img/wn/01d.png";
	}else if(iconId>=801 && iconId<=804){
		icon="http://openweathermap.org/img/wn/02d.png";
	}else{
		`Not available`;
	}

	let dataHTML=`
			<h3 class="place">${placeName.toUpperCase()}</h3>
            <h1 class="temp">${Math.round(temp)}℃</h1>
			<img src=${icon} alt="">
            <h1 class="description">${weatherData.weather[0].description}</h1>
            <div class="humidity">Humidity: ${weatherData.main.humidity}</div>
            <div class="wind">Wind speed: ${weatherData.wind.speed}</div>
	`

	container.innerHTML=dataHTML;
}


/*
base: "stations"
clouds: {all: 19}
cod: 200
coord: {lon: 76.5, lat: 10}
dt: 1671169370
id: 1267254
main: 
{temp: 302.97, feels_like: 302.63, temp_min: 302.97, temp_max: 305.77, pressure: 1010, …}
name: "Kerala"
sys: {type: 1, id: 9211, country: 'IN', sunrise: 1671152595, sunset: 1671194146}
timezone: 19800
visibility: 10000
weather: [{…}]
wind: {speed: 0.61, deg: 121, gust: 0.81}
*/