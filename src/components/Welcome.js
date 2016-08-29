import  React, { PropTypes } from 'react'

const Welcome = ({onClickStart}) => (
  <div>
  <p>
    Welcome, click start to begin.
  </p>
  <button onClick={onClickStart}>
    Start
  </button>
  </div>
)

Welcome.propTypes = {
  onClickStart: PropTypes.func
}

export default Welcome
