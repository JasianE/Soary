import React, {useState} from 'react'
import DroneCard from '../components/DroneCard'

function ListOfDrones(props){
    const [drones, setDrones] = useState([{firstName: 'poo', lastName: 'li', land: {lat: '42', long: '43'}}])

    //Make calls to api to see which drones are coming towards user 
    //User object is stored in cookies? Or user object is passsed through app.js via props depends


    return(
        <div>
            <h1>Drones Arriving To {/*User Name Company*/}</h1>
            {drones.map((key) => {
                return <DroneCard firstName = {key.firstName} lastName = {key.lastName} land = {key.land} />
            })
            }
        </div>
    )
}

export default ListOfDrones