import React, { Component } from 'react';
import questionsData from "./Data/questionsData.js";
import './App.css';

class App extends Component {
  render()  {
    console.log('%c App-LOG | questions data ', 'color: green; font-weight: bold;', questionsData.gameInfo)

  return (
      <div className="App">
        
        App is loaded with otter question data!
      </div>
    );
  }
}
export default App;
