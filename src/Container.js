import { connect } from 'react-redux';
import { startQuiz, submitQuestion } from './actions';
import Quiz from './components/Quiz';

const getCurrentQuestion = (questions, id) => {
  return questions[id];
};

const mapStateToProps = (state) => {
  return {
    currentQuestionId: state.quiz.currentQuestionId,
    currentQuestion: getCurrentQuestion(state.quiz.questions, state.quiz.currentQuestionId),
    status: state.quiz.status,
    score: state.quiz.questions.reduce((totalScore, question, idx) => {
      console.log(state.quiz.answers);
      if(question.correctAnswer === state.quiz.answers[idx]){
        return totalScore + 1;
      }
      return totalScore;
    }, 0)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickStart: () => {
      dispatch(startQuiz());
    },
    onSubmitQuestion: values => {
      console.log("values", values);
      dispatch(submitQuestion(values.currentQuestionId, values.answerId));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default Container;
