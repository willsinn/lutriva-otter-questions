import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer.js';



class GameController extends Component {
  state = {
    score: 0
  }
    // this.handleScoreChange = this.handleScoreChange;



  // going to pass me down as a cb
  handleScoreChange = (playerScore) => {
    console.log("I am playerScore", playerScore);
    this.setState({score: playerScore})
  }
  render(){

    console.log('%cGameController-LOG|score-prop', 'color: green; font-style: italic;', this.props.score)
    return(
      <div className="gameController">
      The Game Controller <h1>{this.state.score}</h1>
        < QuestionsContainer
          questions={this.props.questions}
          handleScoreChange={this.handleScoreChange}
        />
      </div>
    );
  }
}

export default GameController;
