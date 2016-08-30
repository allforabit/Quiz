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

    let answers = state.answers;
    console.log("answers", answers);
    console.log("action", action);

    answers[action.questionId] = parseInt(action.answerId);

    let currentQuestionId = state.currentQuestionId + 1;

    let status = currentQuestionId >= state.questions.length ? 'finished' : 'started';

    return Object.assign({}, state, {
      answers: answers,
      currentQuestionId: currentQuestionId,
      status: status
    });

  default:
    return state;
  }
};

export default quiz;
