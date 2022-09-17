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
            {props.display && props.display !== '3' ? <button onClick={handleSubmit}>Fulfill</button> : 
            props.display === '3' ? 
            <div>

                <button onClick={(e) => {
                    e.preventDefault()
                    const numberOfDeliveries = parseInt(prompt('How many deliveries would you like your drone to do?'), 10)
                    //Send number of delieveries to backend for requests

                }}>Begin Delivery</button>
            </div> 
            : null}
        </div>
    )
}

export default DroneCard