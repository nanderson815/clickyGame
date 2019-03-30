import React, { Component } from 'react';
import './App.css';
import dogsJSON from './dogs.json';
import Dogs from './Components/Dogs/Dogs';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  state = {
    dogs: dogsJSON,
    score: 0,
    topScore: 0
  }



  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <div className="container">
          <div className="row">
            {this.state.dogs.map((dog) => <Dogs key={dog.id} data={dog} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
