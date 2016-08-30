import  React, { PropTypes } from 'react';

const Finish = ({onClickStart, score}) => (
    <div>
    <p>
    Completed you scored: {score}
    </p>
    <button onClick={onClickStart}>
    Start again
  </button>
    </div>
);

Finish.propTypes = {
  onClickStart: PropTypes.func
};

export default Finish;
