import React from 'react';
import Question from './Question';
import Welcome from './Welcome';
import Finish from './Finish';

const QuizUI = ({status, score, currentQuestion, onClickStart, onSubmitQuestion}) => {
  let currentScreen;

  switch(status) {
  case 'started':

    currentScreen = <Question
      {...currentQuestion}
      score={score}
      onSubmit={onSubmitQuestion}
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

export default QuizUI;
