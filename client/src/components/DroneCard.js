import React from 'react'
import './temp.css'

function DroneCard(props){
    const handleSubmit = (e) => {
        e.preventDefault()
        //Send a req to the backend and verify that the company has placed the product inside the bag
        
    }
    return(
        <div className='DroneCard'>
            <h1>{`${props.firstName} ${props.lastName}`}</h1>
            <h2>{`Place Of Origin, Latitude: ${props.land.lat} Longitude: ${props.land.long}`}</h2>
            {props.display ? <button onClick={handleSubmit}>Fulfill</button> : null}
        </div>
    )
}

export default DroneCard