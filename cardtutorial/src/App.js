import './App.css';
import Card from './components/cardInfo';
import faker from 'faker';
import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import Button from './elements/button';
import axios from 'axios';

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

class App extends Component {
  constructor(props){
    console.log("class constructor.")
    super(props)
    this.state={
      theme:{
        primary: 'green',
        default: 'red',
      },
      cardlist:[],
      toggle: true,
      buttonClass: ['button'],
      search_id: "",
    }
  }

  getUserData = () => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then(
        res => {
          this.setState({cardlist:res.data});
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("Derived state", state);
    return state
  }
  
  onDeleteHandler = (event, id) =>{
    const tmp_card_list = [...this.state.cardlist]
    const card_index = this.state.cardlist.findIndex(card=>card.id === id)
    tmp_card_list.splice(card_index, 1)
    this.setState({cardlist:tmp_card_list})
  }
  setNamehandler = (event, id) => {
    const tmp_card_list = [...this.state.cardlist]
    const card_index = this.state.cardlist.findIndex(card=>card.id === id)
    tmp_card_list[card_index].name = event.target.value
    this.setState({cardlist:tmp_card_list})
  }
  searchNamehandler = (event) => {
    console.log(this.state.search_id)
    if (event.key === 'Enter'){
      const tmp_card_list = [...this.state.cardlist]
      const card_index = this.state.cardlist.findIndex(card=>card.id == this.state.search_id)
      console.log(tmp_card_list[card_index])
      this.setState({cardlist:[tmp_card_list[card_index]]})
    }
  }
  setIdhandler = (event) => {
    this.setState({search_id:event.target.value})
  }
  toggleHandler = () => this.setState({toggle:!this.state.toggle})

  componentDidMount(){
    console.log("Component mounted.")
    this.getUserData();
  }

  render(){
    console.log('App render function.')
    if (this.state.cardlist.length<2) this.state.buttonClass.push('button2');
    else this.state.buttonClass.push('button1');
    return (
      <ThemeProvider theme={this.state.theme}>
      <div style={{ display: 'block' }}>
        <input type="text" onChange={(event) => this.setIdhandler(event)} 
        onKeyPress={(event) => this.searchNamehandler(event)} value={this.state.search_id}/>
        <div>
          <Button color='primary' length={this.state.cardlist.length}>Toggle</Button>
          <button className={this.state.buttonClass.join(' ')} onClick={this.toggleHandler}>Hide/Unhide</button>
        </div>
        <div>
          {this.state.toggle? 
          (
            this.state.cardlist.map((card)=><Card className="flleft"
            name={card.name} key={card.id} city={card.address.city} phone={card.phone} zip={card.address.zip}
            email={card.email} setName={(event)=>this.setNamehandler(event, card.id)} 
            onDelete={()=>this.onDeleteHandler(card, card.id)}
            profile_image={card.avatar}> </Card>
            )
          ):<p>Content hidden.</p>
          }
        </div>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
