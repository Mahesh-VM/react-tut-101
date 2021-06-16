import React, {Component} from 'react'
import '../css/cardinfo.css'
import '../css/w3.css'


class Card extends Component {
    componentDidUpdate(){
        console.log("Card component did update.")
    }
    shouldComponentUpdate(){
        console.log("Card should update.")
        return true
    }
    componentWillUnmount(){
        console.log("Card unmounted.")
    }
    render (){
        console.log("Card component.")
        return (
            <div className="cardholder">
                <div>
                    <div className="namediv">
                        <h4>{ this.props.name }</h4>
                    </div>
                    <input className="w3-input" type="text" onChange={this.props.setName} value={this.props.name}/>
                    <p>{ this.props.email }</p>
                    <label>Phone : {this.props.phone}</label>
                    <label>City : {this.props.city}</label>
                    <label>Zipcode : {this.props.zip}</label>
                    <button className="button button1" onClick={this.props.onDelete}>Delete</button>
                    <span>{ this.props.children }</span>
                </div>          
            </div>
        )
    }
    
}

export default Card;