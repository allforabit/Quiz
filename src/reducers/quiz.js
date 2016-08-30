const quiz = (state = {answers: {}}, action) => {
  switch (action.type) {
  case 'START_QUIZ':
    return Object.assign({}, state, {
      status: 'started',
      currentQuestionId: 0
    });
  case 'FINISH_QUIZ':
    return Object.assign({}, state, {
      status: 'finished'
    });
  case 'SUBMIT_QUESTION':
    console.log(action);
    let answers = state.answers;
    answers[action.questionId] = action.answerId;
    return Object.assign({}, state, {
      answers: answers
    });

  default:
    return state;
  }
};

export default quiz;
