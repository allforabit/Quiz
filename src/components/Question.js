import React, {PropTypes} from 'react';
import Answer from './Answer';

const Question = ({ onClick, complete, text, answers }) => (
  <div>
    {text}
    <ul>
      {answers.map(answer =>
        <Answer
          key={Math.random()}
          text={answer}
        />
      )}
    </ul>
    <button >Submit answer</button>
  </div>
)

// Question.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Question
