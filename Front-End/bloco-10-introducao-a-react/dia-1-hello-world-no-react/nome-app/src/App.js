import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const NewArray = ['Estudar classes react', 'escutar musica', 'limpar quarto', 'estudar jsx', 'beber uma com os brodi', 'pagar boletos']

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <ul>{ NewArray.map(task => Task(task))}</ul>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
