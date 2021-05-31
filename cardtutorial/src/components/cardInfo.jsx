import React, { Component } from 'react'
import '../css/cardinfo.css'

class CardInfo extends Component {
    render() {
        return (
            <div className="cardholder">
                <img src={this.props.profile_image} alt="avatar"></img>
                <div>
                    <h4>{ this.props.name }</h4>
                    <p>{ this.props.designation }</p>
                </div>          
            </div>
        )
    }
}
export default CardInfo;
