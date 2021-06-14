import './App.css';
import Card from './components/cardInfo';
import faker from 'faker';
import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import Button from './elements/button';

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      theme:{
        primary: 'green',
        default: 'red',
      },
      cardlist:[
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar()
        },
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar()
        },
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar()
        },
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar()
        }
      ],
      toggle: true,
      buttonClass: ['button'],
    }
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
  toggleHandler = () => this.setState({toggle:!this.state.toggle})

  render(){
    if (this.state.cardlist.length<2) this.state.buttonClass.push('button2');
    else this.state.buttonClass.push('button1');
    return (
      <ThemeProvider theme={this.state.theme}>
      <div style={{ display: 'block' }}>
        <div>
          <Button color='primary' length={this.state.cardlist.length}>Toggle</Button>
          <button className={this.state.buttonClass.join(' ')} onClick={this.toggleHandler}>Hide/Unhide</button>
        </div>
        <div>
          {this.state.toggle? 
          (
            this.state.cardlist.map((card)=><Card className="flleft"
            name={card.name} key={card.id}
            designation={card.title} setName={(event)=>this.setNamehandler(event, card.id)} 
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
