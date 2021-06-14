import React, {Component} from 'react'
import '../css/cardinfo.css'
import '../css/w3.css'


class Card extends Component {
    render (){
        return (
            <div className="cardholder">
                <img src={this.props.profile_image} alt="avatar"></img>
                <div>
                    <div className="namediv">
                        <h4>{ this.props.name }</h4>
                    </div>
                    <input className="w3-input" type="text" onChange={this.props.setName} value={this.props.name}/>
                    <button className="button button1" onClick={this.props.onDelete}>Delete</button>
                    <p>{ this.props.designation }</p>
                    <span>{ this.props.children }</span>
                </div>          
            </div>
        )
    }
    
}

export default Card;