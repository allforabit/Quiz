const quizApp = (state = {}, action) => {
  switch (action.type) {
  case 'START_QUIZ':
    alert('start')
    return Object.assign({}, state, {
      status: 'started',
      currentQuestionId: 0
    })
  case 'FINISH_QUIZ':
    return Object.assign({}, state, {
      status: 'finished'
    })
  default:
    return state
  }
}

export default quizApp
