import React, { Component } from 'react';
import GameQuestionAnswerButton from './GameQuestionAnswerButton.js'



class GameQuestion extends Component {
  render(){
    console.log('%cGameQuestion-LOG|score-prop', 'color: red; font-style: italic;', this.props)
    return(
      <li className="gameQuestion">
        <div>{this.props.text}</div>
        <GameQuestionAnswerButton
          btnText={["TRUE"]}
          answer={this.props.answer}
          />
        <GameQuestionAnswerButton
          btnText={["FALSE"]}
          answer={this.props.answer}
        />

      </li>
    );
  }
}

export default GameQuestion;
