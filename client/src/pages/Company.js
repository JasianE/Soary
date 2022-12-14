import React, {useState} from 'react'
import OptionCard from '../components/OptionCard'
import SetUpDroneDropOff from './SetUpDroneDropOff'
import ListOfDrones from './ListOfDrones'
import ChangeDroneStatus from './ChangeDroneStatus'

function Company(props){
    const [active, setActive] = useState(false)
    //Props include
        // -user object reference

    const optionFactory = (name, shorthand) => {
        const action = () => {
            setActive(shorthand)
        }
        return {
            name, action
        }
    }
    
    const reset = () => {
        //Changes back to homepage
        setActive(false)
    }

    const options = [optionFactory('Set Up Drone Drop Off', 'Drop'), optionFactory('List Of Drones', 'List'), 
    optionFactory('Update Drone Status', 'Status')]

    return(
        <div>
            {active === 'Drop' ? <SetUpDroneDropOff reset = {reset} /> : active === 'List' ? <ListOfDrones reset = {reset}/> 
            : active === 'Status' ? <ChangeDroneStatus reset = {reset} /> : 
            options.map((key) => {
                return <OptionCard name = {key.name} action = {key.action}/>
            })}
        </div>
    )
}

export default Company