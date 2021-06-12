import './App.css';
import Card from './components/cardInfo';
import faker from 'faker';
import React, {useState} from 'react';

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function App() {
  const changeNameHandler = () => {
    setName(faker.name.firstName())
  }
  
  const [name, setName] = useState('Enter the Name.')
  const [toggle, setToggle] = useState(true)
  const [cardlist, setCardlist] = useState([
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
  ])
  
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
  return (
    <div style={{ display: 'block' }}>
      <div>
        <button className="button button1" onClick={toggleHandler}>Hide/Unhide</button>
      </div>
      <div>
        {toggle? 
        (
          cardlist.map((card)=><Card className="flleft"
          name={card.name} changeName={changeNameHandler} key={card.id}
          designation={card.title} setName={(event)=>setNamehandler(event, card.id)} onDelete={()=>onDeleteHandler(card, card.id)}
          profile_image={card.avatar}> </Card>
          )
        ):<p>Content hidden.</p>
        }
      </div>
    </div>
  );
}

export default App;
