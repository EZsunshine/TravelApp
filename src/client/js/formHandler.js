import {getGeoLocation, getWeather} from './requests'

const trip = {}
// Create an event listener with a callback function to execute when clicked
document.getElementById('generate').addEventListener('click', performAction)
   
async function performAction(e) {
    e.preventDefault()

    const des = document.getElementById('des').value
    const dep = document.getElementById('dep').value
    const geoLocation = await getGeoLocation (des)
    const getWeatherForcast = await getWeather(latitude, longitude)
    
    
    //.then (postData)
}


// Function to POST data

// async function postData ( url = '', data = {}) {
//     const req = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     });

//         try {
//             const newData = await req.json();
//             return newData;
//         }catch(error) {
//         console.log("error", error);
//         //appropriately handle the error
//         }
// }


export {performAction}