import React, { Component } from 'react';
import GameQuestion from './GameQuestion.js'



class QuestionsContainer extends Component {

  render(){
    console.log('%cQuestionsContainer-LOG|questions-prop', 'color: red; font-weight: bold;', this.props.questions)
    let gameQuestions;
    gameQuestions = this.props.questions.map( question => {
      return  <GameQuestion
                  id={question.id}
                  text={question.text}
                  answer={question.answer}
                />
    });

    let questionsUL = {
      listStyle: 'none',
    }
    return(
      <div className="gameController">
      Questions Container
        <ul style={questionsUL}>
          {gameQuestions}
        </ul>

      </div>
    );
  }
}

export default QuestionsContainer;
