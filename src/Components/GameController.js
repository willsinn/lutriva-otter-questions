import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer.js';



class GameController extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerScore: 0
    };
    this.handleScoreChange = this.handleScoreChange;

  }

  handleScoreChange = () => {
  }
  render(){
    const playerScore = this.state.playerScore

    console.log('%cGameController-LOG|score-prop', 'color: green; font-style: italic;', this.props.score)
    return(
      <div className="gameController">
      The Game Controller <h1>{this.state.scoreCounter}</h1>
        < QuestionsContainer

          questions={this.props.questions}
          onChange={this.state.handleScoreIncrement}
        />
      </div>
    );
  }
}

export default GameController;
