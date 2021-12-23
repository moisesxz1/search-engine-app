import axios from 'axios';
import { Dispatch } from 'redux';
import { BingResultsActionType, GoogleResultsActionType } from '../action-types';
import { BingResultsAction, GoogleResultsAction } from '../actions';

export interface OrganicResult {
  title: string;
}

export const fetchResultsBing = (keyword: string = '') => {
  return async (dispatch: Dispatch<BingResultsAction | GoogleResultsAction>) => {
    dispatch({
      type: BingResultsActionType.FETCH_RESULTS_BING_RESET,
    });
    dispatch({
      type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_RESET,
    });
    dispatch({
      type: BingResultsActionType.FETCH_RESULTS_BING,
    });

    try {
      const { data } = await axios.get(`http://localhost:3001/bing-results?keyword=${keyword}`);

      const bingResults = data.organic_results.map((or: OrganicResult) => or.title);

      dispatch({
        type: BingResultsActionType.FETCH_RESULTS_BING_SUCCESS,
        payload: bingResults,
      });
    } catch (err: any) {
      dispatch({
        type: BingResultsActionType.FETCH_RESULTS_BING_ERROR,
        payload: err.message,
      });
    }
  };
};
