import './App.css';
import PersonComponent from './components/PersonComponent';
import ListRenderer from './components/ListRenderer';

function App() {
  const persons = [
    {
      id: 1,
      name: "abu",
      age: 25
    },
    {
      id: 2,
      name: "abdul",
      age: 26
    },
    {
      id: 3,
      name: "abdullah",
      age: 29
    }

  ]
  return (
    <div className="App">
      {/* <ul>
        {
          persons.map((person) => {
           return <li key={person.id}>
              <p>{person.id}</p>
              <p>{person.name}</p>
              <p>{person.age}</p>
            </li>
          })
        }
      </ul> */}
      <ListRenderer items={persons} ItemComponent={PersonComponent} itemName="person"/>
    </div>
  );
}

export default App;
