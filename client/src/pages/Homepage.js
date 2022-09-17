import React, {useState} from 'react'
import FormCard from '../components/FormCard'
import Company from './Company'


function Homepage(){

    return(
        <div>
            <h1>Welcome To Soary!</h1>
            <Company/>
        </div>
    )
}

export default Homepage