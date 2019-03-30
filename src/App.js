import React, { Component } from 'react';
import './App.css';
import dogsJSON from './dogs.json';
import Dogs from './Components/Dogs/Dogs';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  state = {
    dogs: dogsJSON
  }



  render() {
    return (
      <div className="App">
      <Navbar />
      {this.state.dogs.map((dog) => <Dogs key={dog.id} data={dog}/>)}

      </div>
    );
  }
}

export default App;
