import React, { Component } from 'react';
import questionsData from "./Data/questionsData.js";
import GameController from "./Components/GameController.js";
import './App.css';


class App extends Component {
  render()  {
    console.log('%cApp-LOG|questions-data', 'color: green; font-weight: bold;', questionsData.gameInfo)

  return (
      <div className="App">
        <h1>{questionsData.gameInfo.name}</h1>
        <GameController
          score={questionsData.gameInfo.score}
          questions={questionsData.questions}
        />
      </div>
    );
  }
}
export default App;
