import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor () {
    super();
    this.state = {
      groceries: [{
        name: 'apple',
        id: 1,
        purchased: false
      },

    ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>This is the main app</h1>
        
      </div>
    );
  }
}

export default App;
