let weatherData

const getWeather = async () => {
  const city = document.querySelector('input').value
  console.log('going out to api')
  const resp = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=c65edb846e1622f0daec1fe4f480a96f&units=imperial'
  )
  console.log('back from api')
  weatherData = await resp.json()
  // console.log(weatherData)

  displayData(weatherData.weather[0].main + ', ' + weatherData.main.temp + 'F')
}

const displayData = weatherData => {
  document.querySelector('.weather-results').textContent = weatherData
}
document.querySelector('.search-button').addEventListener('click', getWeather)

document.querySelector('.weather-results').textContent = weatherData
