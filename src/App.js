import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleAddToCart = (gun) => {
    setCart(gun);
  }

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className='card-container'>
        {
          guns.map(gun => <Card
            key={gun.id}
            gunData={gun}
            handleAddToCart={handleAddToCart}
          />)
        }
      </div>
    </div>
  );
}

export default App;
