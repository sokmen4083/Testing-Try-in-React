import logo from './logo.svg';
import './App.css';
import Person from './component/Person'

function App() {
let data = {
  "firstname": "Mehmet",
  "lastname": "Sökmen"
}

  return (
    <div className="App">
      <Person data={data}/>
    </div>
  );
}

export default App;
