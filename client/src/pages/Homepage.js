import React, {useState} from 'react'
import FormCard from '../components/FormCard'
import Company from './Company'
import DroneVolunteer from './DroneVolunter'
import PharmacyPage from './PharmacyPage'


function Homepage(){

    return(
        <div>
            <h1>Welcome To Soary!</h1>
            <PharmacyPage />
        </div>
    )
}

export default Homepage