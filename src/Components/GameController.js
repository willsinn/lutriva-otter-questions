import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer.js';



class GameController extends Component {

  render(){
    console.log('%cGameController-LOG|score-prop', 'color: green; font-style: italic;', this.props.score)
    return(
      <div className="gameController">
      The Game Controller
        < QuestionsContainer
          questions={this.props.questions}
        />
      </div>
    );
  }
}

export default GameController;
