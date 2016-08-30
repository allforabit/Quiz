import  React, { PropTypes } from 'react';
import Question from './Question';
import Welcome from './Welcome';
import Finish from './Finish';

const QuizUI = ({status, score, currentQuestionId, currentQuestion, onClickStart, onSubmitQuestion}) => {
  let currentScreen;

  console.log("q", currentQuestionId);

  switch(status) {
  case 'started':

    currentScreen = <Question
      {...currentQuestion}
      onSubmit={onSubmitQuestion}
      currentQuestionId={currentQuestionId}
      />;

      break;
  case 'finished':
    currentScreen = <Finish onClickStart={onClickStart} score={score} />;
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
