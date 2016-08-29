import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import quizApp from './reducer'
import App from './components/App'

const questions = [
  {
    text: "What's the thing?",
    answers: ["The first thing", "The second thing", "The third thing"],
    correctAnswer: 1
  },
  {
    text: "What's the other thing?",
    answers: ["This", "This", "Or this"],
    correctAnswer: 0
  },
  {
    text: "What's this other thing?",
    answers: ["Yo", "No", "So"],
    correctAnser: 2
  }
]

let store = createStore(quizApp, {
  status: "welcome",
  currentQuestionId: 0,
  questions: questions
})

render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
)
