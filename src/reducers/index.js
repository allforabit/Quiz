import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import quiz from './quiz';

export default combineReducers({
  form: formReducer,
  quiz: quiz
});
