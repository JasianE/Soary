import React, {useState} from 'react'

function SetUpDroneDropOff(props){
    //Change design for UX such as press button begin placing the drop off zone map gps etc
    //Core functionallity is to have coordinates and sent to back-end to update document
    const [currentLocation, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.reset()
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position) {
                setLocation({lat: position.coords.latitude, long: position.coords.longitude})
              });
            alert('Succesfully Added Drop Off Zone!')
        } else {
            alert('Please Allow Geolocation To Set Up Tracking')
        }
    }

    // **TODO Send Current Location to backend make call to api 
    return(
        <div>
            <button onClick={handleSubmit}>Set Up Drop Off</button>
        </div>
    )
}

export default SetUpDroneDropOff