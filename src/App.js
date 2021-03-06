import './App.css';
import {useEffect, useState} from 'react';
import PersonComponent from './components/person.component';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const apiUrl = 'https://swapi.dev/api/people/';
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result.results);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);
  if (error) {
    return <div>Issues loading data.</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {
          items.map(item => (
            <PersonComponent key={item.id} person={item} />
          ))
        }
      </ul>
    );
  }
}

export default App;
