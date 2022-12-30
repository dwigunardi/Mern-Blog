import logo from '../assets/logo.svg';
import './App.css';
import { ExampleContext } from '../context/example';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const Data = useContext(ExampleContext)
  return (
    
    <div className="App">
      <header className="App-header">
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
          {Data.name}
        </a>
        <Link to={'/Home'}>Go to Home</Link>
      </header>
    </div>
  );
}

export default App;
