import logo from './logo.svg';
import './App.css';
import Counter from "./counter";
import {useState} from "react";

function App() {

const [count,setCount] = useState(0)

  const decrement = () => setCount(count -1)
  const dis = count === 5


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button disabled={dis} onClick={decrement}>decrement</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {count}
        <Counter/>

      </header>
    </div>
  );
}

export default App;
