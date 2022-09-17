import React from 'react'
import './temp.css'

function DroneCard(props){
    return(
        <div className='DroneCard'>
            <h1>{`${props.firstName} ${props.lastName}`}</h1>
            <h2>{`Place Of Origin, Latitude: ${props.land.lat} Longitude: ${props.land.long}`}</h2>
        </div>
    )
}

export default DroneCard