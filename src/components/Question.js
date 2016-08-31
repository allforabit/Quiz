import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';


let Question = ({ handleSubmit, complete, text, answerOptions, pristine, submitting, answers, id, score}) => {

  let answerNodes = answerOptions.map((option, idx) => {
    let answer = answers ? parseInt(answers[id], 10) : null;
    let checked = idx === answer ? "checked" : "";

    return (
      <div key={idx}>
        <label>
        <Field name={"answers." + id} component="input" type="radio" value={idx} checked={checked} />
          {option}
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
    const answers = selector(state, 'answers');
    return {
      answers: answers
    };
  }
)(Question);

export default Question;
