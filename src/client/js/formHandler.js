import {getGeoLocation, getWeather, getImage, countDown} from './requests'

// Create an event listener with a callback function to execute when clicked
document.getElementById('generate').addEventListener('click', performAction)
   
async function performAction (e) {
    const des = document.getElementById('des').value
    const date = document.getElementById('dep_date').value

    const geoLocation = await getGeoLocation(des)
    const duration = await countDown(date)
    const getWeatherForcast = await getWeather(geoLocation.latitude, geoLocation.longitude, duration)
    const imageURL = await getImage(des)
    const data = await postData('http://localhost:8081/add', 
    {'destination': des,
    'country': geoLocation.countryName,
    'date': date, 
    'temp': getWeatherForcast.temp,
    'description': getWeatherForcast.description,
    'icon': getWeatherForcast.icon,
    'url': imageURL,
    'duration': duration
    })
    const update = await updateUI(data)

    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'none';
    }
    )
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

 try{
    document.getElementById('des_d').innerHTML = data.destination
    document.getElementById('country').innerHTML = data.country
    document.getElementById('date_d').innerHTML = data.dep_date
    document.getElementById('duration').innerHTML = data.duration
    document.getElementById('temp').innerHTML = data.temp
    document.getElementById('description').innerHTML = data.description
//    document.getElementById('icon').src = data.icon
    document.getElementById('fromPixabay').src = data.url
}
catch (error) {
    console.log("error", error)
}
 }
    


export {performAction, postData, updateUI}