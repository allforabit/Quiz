import { connect } from 'react-redux'
import { startQuiz } from './actions'
import Quiz from './components/Quiz'

const getCurrentQuestion = (questions, id) => {
  return questions[id]
}

const mapStateToProps = (state) => {
  return {
    currentQuestion: getCurrentQuestion(state.questions, state.currentQuestionId),
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickStart: () => {
      dispatch(startQuiz())
    }
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default Container
