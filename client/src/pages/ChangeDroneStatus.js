import React, {useState} from 'react'
import DroneCard from '../components/DroneCard'

function ChangeDroneStatus(props){
    //Find all drones heading towards company 
    const [drones, setDrones] = useState([{firstName: 'poo', lastName: 'li', land: {lat: '42', long: '43'}}])
    
    return(
        <div>
            {drones.map((key) => {
                return <DroneCard firstName = {key.firstName} lastName = {key.lastName} land = {key.land} display = {true}/>
            })}
            <button onClick={() => {
                props.reset()
            }}>Exit</button> 
        </div>
    )
}

export default ChangeDroneStatus