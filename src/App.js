import React, { Component } from 'react';
import './App.css';
import dogsJSON from './dogs.json';
import Dogs from './Components/Dogs/Dogs';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

class App extends Component {
  state = {
    dogs: dogsJSON,
    score: 0,
    topScore: 0
  }

  onClickHandler = (clicked, id) => {
    if (clicked) {
      let resetDogs = this.state.dogs;
      resetDogs.forEach(dog => dog.clicked = false);
      this.setState({
        score: 0,
        dogs: resetDogs,
        topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore
      });
    } else {
      let newDogs = this.state.dogs;
      newDogs.forEach(dog => {
        if (id === dog.id) {
          dog.clicked = true;
        }
      });
      this.setState({
        dogs: newDogs,
        score: this.state.score + 1
      });

    }
  }

  
  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <br></br>
        <div className="container">
          <div className="row">
            {this.state.dogs.sort((a, b) => 0.5 - Math.random())
              .map((dog) => <Dogs key={dog.id} data={dog} click={this.onClickHandler} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
