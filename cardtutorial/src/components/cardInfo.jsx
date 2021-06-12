import React from 'react'
import '../css/cardinfo.css'
import '../css/w3.css'


const Card = props => {
    return (
        <div className="cardholder">
            <img src={props.profile_image} alt="avatar"></img>
            <div>
                <div className="namediv">
                    <h4>{ props.name }</h4>
                </div>
                <input className="w3-input" type="text" onChange={props.setName} value={props.name}/>
                <button className="button button1" onClick={props.onDelete}>Delete</button>
                <p>{ props.designation }</p>
                <span>{ props.children }</span>
            </div>          
        </div>
    )
}

export default Card;