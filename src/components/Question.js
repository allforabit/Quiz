import React from 'react';
import { Field, Fields, reduxForm, formValueSelector } from 'redux-form';
import Answer from './Answer';
import { connect } from 'react-redux';


let Question = ({ handleSubmit, complete, text, answerOptions, pristine, submitting, answers, currentQuestionId}) => {

  console.log("qu", currentQuestionId);
  console.log("an", answers);

  let answerNodes = answerOptions.map((option, id) => {
    let answer = answers ? parseInt(answers[currentQuestionId]) : null;
    let checked = id === answer ? "checked" : "";

    return (
      <div key={id}>
        <label>
        <Field name={"answers." + currentQuestionId} component="input" type="radio" value={id} checked={checked} />
          {option}
        </label>
        </div>);
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>{currentQuestionId} {text}</label>
        <div>
          {answerNodes}
        </div>
      </div>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    </form>
  );
 };

Question = reduxForm({
  form: 'question'  // a unique identifier for this form
})(Question);

const selector = formValueSelector('question');

Question = connect(
  state => {
    const answers = selector(state, 'answers');
    return {
      answers: answers
    };
  }
)(Question);

export default Question;
