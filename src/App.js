import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, []);
  return (
    <div>
      <Navbar />
      {
        guns.map(gun => <Card
            key={gun.id}
            data={gun}
          />)
      }
    </div>
  );
}

export default App;
