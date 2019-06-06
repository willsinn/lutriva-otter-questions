import React, { Component } from 'react';
import GameQuestion from './GameQuestion.js'



class QuestionsContainer extends Component {
  render(){
    console.log('%cQuestionsContainer-LOG|questions-prop', 'color: red; font-weight: bold;', this.props.questions)
    return(
      <div className="gameController">
        <GameQuestion
        />
      </div>
    );
  }
}

export default QuestionsContainer;
