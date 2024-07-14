import React from 'react';
import FancyText from './components/FancyText';
import TaskGenerator from './components/TaskGenerator';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title={true} text="Task Management App" />
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
      </header>
      <main>
        <TaskGenerator />
      </main>
    </div>
  );
}

export default App;
