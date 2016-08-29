import  React, { PropTypes } from 'react'

const Finish = ({onClickStart}) => (
    <div>
    <p>
    Completed
    </p>
    <button onClick={onClickStart}>
    Start
  </button>
    </div>
)

Finish.propTypes = {
  onClickStart: PropTypes.func
}

export default Finish
