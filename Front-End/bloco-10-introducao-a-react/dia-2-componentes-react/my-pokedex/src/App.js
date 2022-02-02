import React, { Component } from 'react';
import './App.css';
import Pokemon from './Components/Pokemon';
import pokemons from './data'

class App extends Component {
  render() {
    return (
      pokemons.map((pok) => (
        <Pokemon name={pok.name}/>
      )))
  }
};


export default App;
