import React, { Component } from 'react';

class GameQuestionAnswerButton extends Component {
    state = {
      isCorrect: "",
      playerScore: 0
    }

  handleColorChange = (event) => {
      if (this.props.isAnswered) {
        alert("cannot change answer, move onto the next question!")
        this.setState({isCorrect:this.state.isCorrect})
      } else {
      this.props.handleAnswerClick(event)
      this.handleCorrectScore(event)

  }
}

  handleCorrectScore = (event) => {
  let targetBool = `${event.target.innerHTML}`.toLowerCase()
  // debugger
  let questionAnswer = this.props.answer
  if (targetBool === "true" && questionAnswer === true) {
    //find specii question and update the isCorrect property
    this.setState({isCorrect: "yes", playerScore:this.state.playerScore+=1})
    this.props.handleScoreChange(this.state.playerScore)

  } else if (targetBool === "false" && questionAnswer === false) {
    this.setState({isCorrect: "yes"})
    this.props.handleScoreChange(this.state.playerScore)

  } else {
    this.setState({isCorrect: "no"})
  }
}
  render(){
    let clickedStyles;
    switch (this.state.isCorrect) {
      case "yes":
        clickedStyles = {
          backgroundColor: 'green'
        }
        break;
      case "no":
        clickedStyles = {
          backgroundColor: 'red'
        }
        break;
        case "":
          clickedStyles= {};

      }


    return(
        <button style={clickedStyles} onClick={this.handleColorChange}>{this.props.btnText}</button>
    );
  }
}
export default GameQuestionAnswerButton;
