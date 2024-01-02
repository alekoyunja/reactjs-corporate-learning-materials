import logo from './logo.svg';
import './App.css';
import { BTGMButton } from '../node_modules/react-core-library/dist';

function App() {
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
          Learn React
        </a>
        <BTGMButton title="Tıkla" onClicked={() => alert("clicked!")} />
      </header>
    </div>
  );
}

export default App;
