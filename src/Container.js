import { connect } from 'react-redux';
import { startQuiz, submitQuestion } from './actions';
import Quiz from './components/Quiz';

const getCurrentQuestion = (questions, id) => {
  return questions[id];
};

const mapStateToProps = (state) => {
  let score = state.quiz.questions
      .filter(question =>
              (question.correctAnswer === parseInt(state.quiz.answers[question.id], 10)))
      .length;

  return {
    currentQuestion: getCurrentQuestion(state.quiz.questions, state.quiz.currentQuestionIndex),
    status: state.quiz.status,
    score: score
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickStart: () => {
      dispatch(startQuiz());
    },
    onSubmitQuestion: values => {
      dispatch(submitQuestion(values.answers));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default Container;
