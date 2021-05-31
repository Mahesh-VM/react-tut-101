import './App.css';
import CardInfo from './components/cardInfo'
import faker from 'faker'

function App() {
  return (
    <div>
      <CardInfo 
      name={`${faker.name.firstName()} ${faker.name.firstName()}`} 
      designation={faker.name.jobTitle()} profile_image={faker.image.avatar()}/>
      <CardInfo 
      name={`${faker.name.firstName()} ${faker.name.firstName()}`} 
      designation={faker.name.jobTitle()} profile_image={faker.image.avatar()}/>
      <CardInfo 
      name={`${faker.name.firstName()} ${faker.name.firstName()}`} 
      designation={faker.name.jobTitle()} profile_image={faker.image.avatar()}/>
    </div>
  );
}

export default App;
