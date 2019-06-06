import React, { Component } from 'react';

class GameQuestionAnswerButton extends Component {
  render(){
    return(
        <button>{this.props.btnText}</button>
    );
  }
}
export default GameQuestionAnswerButton;
