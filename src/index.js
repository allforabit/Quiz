import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QuizApp from './reducers';
import App from './components/App';

const questions = [
  {
    id: "thing",
    text: "What's the thing?",
    answerOptions: ["The first thing", "The second thing", "The third thing"],
    correctAnswer: 1
  },
  {
    id: "other-thing",
    text: "What's the other thing?",
    answerOptions: ["This", "This", "Or this"],
    correctAnswer: 0
  },
  {
    id: "this-other-thing",
    text: "What's this other thing?",
    answerOptions: ["Yo", "No", "So"],
    correctAnswer: 2
  }
];

let store = createStore(QuizApp, {
  quiz: {
    status: "welcome",
    currentQuestionIndex: 0,
    questions: questions,
    answers: {}
  }
});

render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
