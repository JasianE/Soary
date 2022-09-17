import React, {useState, useEffect} from 'react'
import DroneCard from '../components/DroneCard'

function DroneVolunteer(props){
    //Props contains user document from db
    const [user, setUser] = useState({
        firstName: 'lmao',
        lastName: 'lmao',
        drone: true,
        land: {lat: '42', long: '43'}
    })
    const [droneKey, setDroneKey] = useState('')
    //Where the drone lands is stored inside the user1 mdoel
    return(
        <div>
            <h1>{`Welcome ${'user'}!`}</h1>
            {user.drone ? 
                <div>
                    <DroneCard firstName = {user.firstName} lastName = {user.lastName} land = {user.land} display ='3'/>
                </div> : 
                <div>
                    <input 
                    type = 'text'
                    value = {droneKey}
                    required
                    placeholder='Drone Key'
                    onChange={(e) => {setDroneKey(e.target.value)}}
                    />
                    <button onClick = {(e) => {
                        e.preventDefault()
                        //send call to apifor drone
                    }}>Submit</button>
                </div>
                }

        </div>
    )
}

export default DroneVolunteer