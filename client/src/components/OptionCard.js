import React from 'react'

function OptionCard(props){
    //Props has props.action which toggles the page to change into its corresponding page and props.name which indicates the name of 
    // theoptipns
    return(
        <div onClick={props.action} className='optionCard'>
            <h1>{props.name}</h1>
        </div>
    )
}

export default OptionCard