import React, {PropTypes} from 'react';

const Answer = ({ text }) => (
  <div>
    <input type="radio" name="{text}" />
    {text}
  </div>
)

// Question.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Answer
