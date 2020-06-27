import {getGeoLocation, getWeather, getImage} from './requests'

// Create an event listener with a callback function to execute when clicked
document.getElementById('generate').addEventListener('click', performAction)
   
async function performAction (e) {
    const des = document.getElementById('des').value
    const date = document.getElementById('dep_date').value

    const geoLocation = await getGeoLocation (des)
    const getWeatherForcast = await getWeather(geoLocation.latitude, geoLocation.longitude)
    const imageURL = await getImage(des)
    const data = await postData('http://localhost:8080/add', 
    {'destination': des,
    'date': date, 
    'temp': getWeatherForcast.temp,
    'description': getWeatherForcast.description,
    'url': imageURL
    })
    const update = await updateUI(data)
}

// Function to POST data to local server
async function postData ( url = '', data = {}) {
    const req = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
        try {
            const newData = await req.json();
            return newData;
        }catch(error) {
        console.log("error", error);
        }
}


// Update UI
async function updateUI(data) {
    console.log("data", data)
    document.getElementById('des_d').innerHTML = data.destination
    document.getElementById('date').innerHTML = data.date
    document.getElementById('temp').innerHTML = data.temp
    document.getElementsByTagName('img').src = data.url
}


export {performAction, postData, updateUI }