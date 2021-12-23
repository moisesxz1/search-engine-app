import axios from 'axios';
import { Dispatch } from 'redux';
import { GoogleResultsActionType, BingResultsActionType } from '../action-types';
import { GoogleResultsAction, BingResultsAction } from '../actions';
import { OrganicResult } from '.';

export const fetchResultsGoogle = (keyword: string = '') => {
  return async (dispatch: Dispatch<GoogleResultsAction | BingResultsAction>) => {
    dispatch({
      type: BingResultsActionType.FETCH_RESULTS_BING_RESET,
    });
    dispatch({
      type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_RESET,
    });
    dispatch({
      type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE,
    });

    try {
      const { data } = await axios.get(`http://localhost:3001/google-results?keyword=${keyword}`);

      const googleResults = data.organic_results.map((or: OrganicResult) => or.title);

      dispatch({
        type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_SUCCESS,
        payload: googleResults,
      });
    } catch (err: any) {
      dispatch({
        type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_ERROR,
        payload: err.message,
      });
    }
  };
};
