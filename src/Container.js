import { connect } from 'react-redux';
import { startQuiz, submitQuestion } from './actions';
import Quiz from './components/Quiz';

const getCurrentQuestion = (questions, id) => {
  return questions[id];
};

const mapStateToProps = (state) => {
  return {
    currentQuestion: Object.assign({},
      {id: state.quiz.currentQuestionId},
      getCurrentQuestion(state.quiz.questions, state.quiz.currentQuestionId)),
    status: state.quiz.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickStart: () => {
      dispatch(startQuiz());
    },
    onSubmitQuestion: values => {

      console.log(values);

      dispatch(submitQuestion(values.currentQuestionId, values.answerId));

      // evt.preventDefault();
      // console.log(JSON.stringify(evt, null, 2));
      //alert("submit question");
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default Container;
