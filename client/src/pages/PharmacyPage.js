import React, {useState, useEffect} from 'react'
import PharmacyCard from '../components/PharmacyCard'

function PharmacyPage(){
    //Queries backend for every pharmacy document
    const [pharmacies, setPharmacies] = useState(['1', '1'])

    return(
        <div>
            {pharmacies.map((key) => {
               return <PharmacyCard />
            })}
        </div>
    )
}

export default PharmacyPage