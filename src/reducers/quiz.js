const quiz = (state = {answers: {}}, action) => {
  switch (action.type) {
  case 'START_QUIZ':
    return Object.assign({}, state, {
      status: 'started',
      currentQuestionIndex: 0
    });
  case 'SUBMIT_QUESTION':

    let currentQuestionIndex = state.currentQuestionIndex + 1;
    let status = currentQuestionIndex >= state.questions.length ? 'finished' : 'started';

    return Object.assign({}, state, {
      currentQuestionIndex: currentQuestionIndex,
      status: status,
      answers: action.answers
    });

  default:
    return state;
  }
};

export default quiz;
