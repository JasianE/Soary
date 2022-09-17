import React, {useState} from 'react'
import Select from 'react-select'
import './temp.css'

function FormCard(){
    const [choice, setChoice] = useState('Customer')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [droneModel, setDroneModel] = useState('')

    const handleChange = (e) => {
        switch(e.target.name){
            case 'firstName':
                setFirstName(e.target.value)
                break
            case 'lastName':
                setLastName(e.target.value)
                break
            case 'email': 
                setEmail(e.target.value)
                break
            case 'droneModel':
                setDroneModel(e.target.value)
                break
            default:
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            choice, 
            firstName,
            email,
            lastName,
            droneModel
        }
        //Submit data to flask api
    }
    return(
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <label>Will you be using Soary as a...</label>
                <select onChange={(e) => {
                    setChoice(e.target.value)
                }} defaultValue = 'Customer'>
                    <option value="Company">Company</option>
                    <option value="Drone Provider">Drone Provider</option>
                    <option value="Customer">Customer</option>
                </select>
                <input
                type='text'
                value={firstName}
                placeholder='First Name'
                required
                onChange={handleChange}
                name='firstName'
                />
                <input
                type='text'
                value={lastName}
                placeholder='Last Name'
                required
                onChange={handleChange}
                name='lastName'
                />
                <input
                type='text'
                value={email}
                placeholder='Email'
                required
                onChange={handleChange}
                name='email'
                />
                <input
                type='text'
                value={droneModel}
                placeholder='droneModel'
                required
                onChange={handleChange}
                name='droneModel'
                />  
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormCard