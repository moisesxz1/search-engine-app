import { combineReducers } from 'redux';
import googleResultsReducer from './googleResultsReducer';
import bingResultsReducer from './bingResultsReducer';

const reducers = combineReducers({
  googleResults: googleResultsReducer,
  bingResults: bingResultsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
