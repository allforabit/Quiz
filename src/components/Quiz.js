import  React, { PropTypes } from 'react'
import Question from './Question'
import Welcome from './Welcome'
import Finish from './Finish'

const QuizUI = ({status, currentQuestion, onClickStart}) => {
  let currentScreen;

  console.log(onClickStart);
  console.log(status);

  switch(status) {
  case 'started':
    currentScreen = <Question {...currentQuestion} />
      break;
  case 'finished':
    currentScreen = <Finish />
      break;
  default:
    currentScreen = <Welcome onClickStart={onClickStart} />
  }

  return (
    <div>
      {currentScreen}
    </div>
  )
}

// QuizUI.propTypes = {
//   onClickStart: PropTypes.func.isRequired,
//   status: PropTypes.string.isRequired
// }

export default QuizUI
