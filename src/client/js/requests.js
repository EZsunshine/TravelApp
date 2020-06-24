const baseURL = `http://api.weatherbit.io/v2.0/current?lat=`
const key = '&key=a4ab190fd16842df9929c2c348d316a6'


// Function to get lat & lng from Geonames
async function getGeoLocation(des) {
    const endpoint = `http://api.geonames.org/searchJSON?q=${des}&maxRows=10&username=elaine_20`
    const res = await fetch(endpoint)
    try {
        const location = {}
        const geoData = await res.json()

        location.latitude = geoData.geonames[0].lat
        location.longitude = geoData.geonames[0].lng
        location.countryCode = geoData.geonames[0].countryCode

        console.log(location)
        return location
    } catch(error) {
        console.log(error)
    }
}

// countdown function to get how soon the trip is


// Function to get weather from Weatherbit
async function getWeather(latitude, longitude) {
    const endpoint = baseURL + `lat=${latitude}&lon=${longitude}`+ key
    const response = await fetch(endpoint)
    try{
        const weatherData = await response.json()
        console.log(weatherData)
        return weatherData
    } catch(error) {
        console.log('error', error)
    }
}


export { getGeoLocation, getWeather }