import './App.css';
import Card from './components/cardInfo';
import faker from 'faker';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
const theme = {
  primary: 'green',
  default: 'mango'
}

function App() {
  const changeNameHandler = () => {
    setName(faker.name.firstName())
  }
  
  const [name, setName] = useState('Enter the Name.')
  const [id, setId] = useState('search id.')
  const [toggle, setToggle] = useState(true)
  const [cardlist, setCardlist] = useState([
    
  ])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{setCardlist(res.data)})
  }, [])

  const searchUsers = (event) =>{
    if(event.key === 'Enter'){
      console.log(event.target.value)
      axios.get(`https://jsonplaceholder.typicode.com/users/${event.target.value}`).then(res=>{setCardlist([res.data])})
    }
  }
  
  const onDeleteHandler = (event, id) =>{
    const tmp_card_list = [...cardlist]
    const card_index = cardlist.findIndex(card=>card.id === id)
    tmp_card_list.splice(card_index, 1)
    setCardlist(tmp_card_list)
  }
  const setNamehandler = (event, id) => {
    const tmp_card_list = [...cardlist]
    const card_index = cardlist.findIndex(card=>card.id === id)
    console.log(card_index)
    tmp_card_list[card_index].name = event.target.value
    setCardlist(tmp_card_list)
  }
  const toggleHandler = () => setToggle(!toggle)
  const setID = (event) => {setId(event.target.value)}
  return (
    <div style={{ display: 'block' }}>
      <div>
        <button className="button button1" onClick={toggleHandler}>Hide/Unhide</button>
        <input className="w3-input" type='text' onChange={setID} value={id} onKeyPress={searchUsers}/>
      </div>
      <div>
        {toggle? 
        (
          cardlist.map((card)=><Card className="flleft"
          name={card.name} changeName={changeNameHandler} key={card.id}
          phone={card.phone} setName={(event)=>setNamehandler(event, card.id)} onDelete={()=>onDeleteHandler(card, card.id)}
          profile_image={card.avatar}> </Card>
          )
        ):<p>Content hidden.</p>
        }
      </div>
    </div>
  );
}

export default App;
