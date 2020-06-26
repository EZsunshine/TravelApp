

const baseURL = `http://api.weatherbit.io/v2.0/forecast/daily?`
const key = '&key=a4ab190fd16842df9929c2c348d316a6'

const pixabayURL = 'https://pixabay.com/api/'
const pixabayKey = '?key=17196217-36220e0e453b52a1af9fb3b09'

// Function to get lat & lng from Geonames
const getGeoLocation = async (des) => {
    const endpoint = `http://api.geonames.org/searchJSON?q=${des}&maxRows=10&username=elaine_20`
    const res = await fetch(endpoint)
    try {
        const location = {}
        const geoData = await res.json()

        location.latitude = geoData.geonames[0].lat
        location.longitude = geoData.geonames[0].lng
        location.countryCode = geoData.geonames[0].countryCode
        
       // console.log(location)
        return location
    } catch(error) {
        console.log(error)
    }
}

// countdown function to get how soon the trip is



// Function to get weather from Weatherbit
const getWeather = async (latitude, longitude) => {
    const endpoint = baseURL + `lat=${latitude}&lon=${longitude}`+ key
    const response = await fetch(endpoint)
    try{
        const weather = {}
        const weatherData = await response.json()
        // console.log(weatherData)

        weather.city = weatherData.city_name
        weather.temp = weatherData.data[0].temp
        weather.description = weatherData.data[0].weather.description
        
       // console.log(weather)
        return weather
    } catch(error) {
        console.log('error', error)
    }
}


// Function to get image from Pixabay
const getImage = async (city) => {
    const endpoint = pixabayURL + pixabayKey + `&q=${city}&image_type=photo&pretty=true&category=places`
    const response = await fetch(endpoint)
    try{
        const imageData = await response.json()
        const imageURL = imageData.hits[0].largeImageURL
     
      //  console.log(imageURL)
        return imageURL
    } catch(error) {
        console.log('error', error)
    }
}

export { getGeoLocation, getWeather, getImage }