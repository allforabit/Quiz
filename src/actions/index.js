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

export const submitQuestion = (id, answerId) => {
  return {
    type: 'SUBMIT_QUESTION',
    questionId: id,
    answerId: answerId
  };
};

