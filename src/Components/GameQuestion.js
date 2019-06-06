import React, { Component } from 'react';



class GameQuestion extends Component {
  render(){
    console.log('%cGameQuestion-LOG|score-prop', 'color: red; font-style: italic;', this.props.question)
    return(
      <div className="gameController">
      A Game Question
      </div>
    );
  }
}

export default GameQuestion;
