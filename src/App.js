import React, { Component } from 'react';
import './App.css';
import dogsJSON from './dogs.json';

class App extends Component {
  state = {
    dogs: dogsJSON
  }



  render() {
    return (
      <div className="App">
        {console.log(this.state)}

      </div>
    );
  }
}

export default App;
