export const startQuiz = () => {
  return {
    type: 'START_QUIZ'
  };
};

export const finishQuiz = () => {
  return {
    type: 'FINISH_QUIZ'
  };
};

export const submitQuestion = (questionId, answerId) => {
  return {
    type: 'SUBMIT_QUESTION',
    questionId: questionId,
    answerId: answerId
  };
};

