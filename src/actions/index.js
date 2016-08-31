export const startQuiz = () => {
  return {
    type: 'START_QUIZ'
  };
};

export const submitQuestion = (answers) => {
  return {
    type: 'SUBMIT_QUESTION',
    answers: answers
  };
};

