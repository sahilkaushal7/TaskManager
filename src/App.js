import React, { Component } from 'react';
import Tasks from "./Containers/Tasks/Tasks";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>Task Manager</h1>
        <Tasks></Tasks>
        </div>
      </div>
    );
  }
}

export default App;
