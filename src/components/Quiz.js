import  React, { PropTypes } from 'react';
import Question from './Question';
import Welcome from './Welcome';
import Finish from './Finish';

const QuizUI = ({status, currentQuestion, onClickStart, onSubmitQuestion}) => {
  let currentScreen;

  switch(status) {
  case 'started':

    currentScreen = <Question
      {...currentQuestion}
      onSubmit={onSubmitQuestion}
      initialValues={{currentQuestionId: currentQuestion.id}}
      />;

      break;
  case 'finished':
    currentScreen = <Finish />;
      break;
  default:
    currentScreen = <Welcome onClickStart={onClickStart} />;
  }

  return (
    <div>
      {currentScreen}
    </div>
  );
};

// QuizUI.propTypes = {
//   onClickStart: PropTypes.func.isRequired,
//   status: PropTypes.string.isRequired
// }

export default QuizUI;
