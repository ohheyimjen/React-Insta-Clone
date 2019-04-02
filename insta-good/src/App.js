import React, { Component } from 'react';
import './App.css';
// import dummyData from '../'
import SearchBar from './components/SearchBar/SearchBar'


class App extends Component {
  constructor () {
    super();
    this.state = {
      // < dummyData: []
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <h1>This is the main app</h1>
        
      </div>
    );
  }
}

export default App;
