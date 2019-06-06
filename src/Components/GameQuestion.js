import React, { Component } from 'react';
import GameQuestionAnswerButton from './GameQuestionAnswerButton.js'



class GameQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAnswered: false
    }
  }


  handleAnswerClick = (event) => {
      this.setState({isAnswered: true})
  }

  render(){
    return(
      <li className="gameQuestion">
        <div>{this.props.text}</div>
        <GameQuestionAnswerButton
          btnText={["TRUE"]}
          handleClick={this.handleAnswerClick}
          handleColorChange={this.handleColorChange}
          isAnswered={this.state.isAnswered}
          answer={this.props.answer}



          />
        <GameQuestionAnswerButton
          btnText={["FALSE"]}
          handleClick={this.handleAnswerClick}
          handleColorChange={this.handleColorChange}
          isAnswered={this.state.isAnswered}
          answer={this.props.answer}



        />

      </li>
    );
  }
}

export default GameQuestion;
