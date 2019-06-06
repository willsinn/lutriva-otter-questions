import React, { Component } from 'react';
import GameQuestion from './GameQuestion.js'



class QuestionsContainer extends Component {

  render(){
    console.log('%cQuestionsContainer-LOG|questions-prop', 'color: red; font-weight: bold;', this.props.questions)
    const shuffler = this.props.questions.sort(() => 0.5 - Math.random())
    let randomFiveQuestions = shuffler.slice(0, 5)
    let gameQuestions;
    gameQuestions = randomFiveQuestions.map( question => {
      return ( <GameQuestion
                  id={question.id}
                  text={question.text}
                  answer={question.answer}
                />)

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
