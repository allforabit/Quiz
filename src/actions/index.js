export const startQuiz = () => {
  return {
    type: 'START_QUIZ'
  }
}

export const finishQuiz = () => {
  return {
    type: 'FINISH_QUIZ'
  }
}

export const submitAnswer = (id) => {
  return {
    type: 'SUBMIT_ANSWER',
    id: id
  }
}

