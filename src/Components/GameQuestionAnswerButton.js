import React, { Component } from 'react';

class GameQuestionAnswerButton extends Component {
  state = {
    isCorrect: ""
  }
  handleColorChange = (event) => {
      if (this.props.isAnswered) {
        alert("cannot change answer, move onto the next question!")
        this.setState({isCorrect:this.state.isCorrect})
      } else {
      this.props.handleClick(event)
      this.handleCorrectScore(event)

  }
}

  handleCorrectScore = (event) => {
  let targetBool = `${event.target.innerHTML}`.toLowerCase()
  let questionAnswer = this.props.answer
  if (targetBool === "true" && questionAnswer === true) {
    console.log('%c correct!', 'color: green; font-style: italic;')
    this.setState({isCorrect: "yes"})
  } else if (targetBool === "false" && questionAnswer === false) {
    console.log('%c correct!', 'color: green; font-style: italic;')
    this.setState({isCorrect: "yes"})
    this.props.handleScore(event)

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
