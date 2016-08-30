import React from 'react';
import { Field, Fields, reduxForm, formValueSelector } from 'redux-form';
import Answer from './Answer';
import { connect } from 'react-redux';


let Question = ({ handleSubmit, complete, text, answers, pristine, submitting, answerId}) => {

  let answerNodes = answers.map((answer, id) => {
    let checked = parseInt(id) === parseInt(answerId) ? "checked" : "";
    return (
      <div key={id}>
        <label>
        <Field name="answerId" component="input" type="radio" value={id} checked={checked} />
          {answer}
        </label>
        </div>);
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{text}</label>
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
    const answerId = selector(state, 'answerId');
    return {
      answerId: answerId
    };
  }
)(Question);

export default Question;
