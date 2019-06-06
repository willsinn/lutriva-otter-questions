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
    if (this.state.isAnswered) {
      alert("cannot change answer, move onto the next question!")
    } else {
      this.setState({isAnswered: true})
      return this.handleColorChange(event)
    }
  }
    handleColorChange = (event) => {
      let targetBool = `${event.target.innerHTML}`.toLowerCase()
      let questionAnswer = this.props.answer
      console.log(this.props.answer)
      console.log(targetBool);
      if (targetBool === "true" && questionAnswer === true) {
        console.log('%c correct!', 'color: green; font-style: italic;')
      } else if (targetBool === "false" && questionAnswer === false) {
        console.log('%c correct!', 'color: green; font-style: italic;')
      } else {
        console.log('%c wrong!', 'color: green; font-style: italic;')
      }
    }

  render(){
    return(
      <li className="gameQuestion">
        <div>{this.props.text}</div>
        <GameQuestionAnswerButton
          btnText={["TRUE"]}
          handleClick={this.handleAnswerClick}
          isAnswered={this.state.isAnswered}

          />
        <GameQuestionAnswerButton
          btnText={["FALSE"]}
          handleClick={this.handleAnswerClick}
          isAnswered={this.state.isAnswered}
        />

      </li>
    );
  }
}

export default GameQuestion;
