import React, { Component } from 'react';

class GameQuestionAnswerButton extends Component {

  render(){
    return(
        <button onClick={this.props.handleClick}>{this.props.btnText}</button>
    );
  }
}
export default GameQuestionAnswerButton;
