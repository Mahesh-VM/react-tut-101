import './App.css';
import Card from './components/cardInfo';
import faker from 'faker';
import React, {useState} from 'react';

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function App() {
  const changeNameHandler = () => {
    setName(faker.name.firstName())
  }
  const setNamehandler = event => {
    setName(event.target.value)
  }
  const [name, setName] = useState('Enter the Name.')
  const [designation, setdesignation] = useState(faker.name.jobTitle())
  const [jobtitle, setjob] = useState(faker.image.avatar())
  const [toggle, setToggle] = useState(true)

  const toggleHandler = () => setToggle(!toggle)
  return (
    <div style={{ display: 'block' }}>
      <div>
        <button class="button button1" onClick={toggleHandler}>Hide/Unhide</button>
      </div>
      <div>
        {toggle? 
        <Card className="flleft"
        name={name} changeName={changeNameHandler}
        designation={designation} setName={setNamehandler}
        profile_image={jobtitle}> </Card>
        :<p>Content hidden.</p>}
      </div>
    </div>
  );
}

export default App;
