import { BingResultsActionType } from '../action-types';
import { BingResultsAction } from '../actions/';

export interface BingResultsState {
  loading: boolean;
  error: string | null;
  bingResults: string[];
}

const initialState = {
  loading: false,
  error: null,
  bingResults: [],
};

const reducer = (state: BingResultsState = initialState, action: BingResultsAction): BingResultsState => {
  switch (action.type) {
    case BingResultsActionType.FETCH_RESULTS_BING:
      return { loading: true, bingResults: [], error: null };
    case BingResultsActionType.FETCH_RESULTS_BING_SUCCESS:
      return { loading: false, bingResults: action.payload, error: null };
    case BingResultsActionType.FETCH_RESULTS_BING_ERROR:
      return { loading: false, bingResults: [], error: action.payload };
    case BingResultsActionType.FETCH_RESULTS_BING_RESET:
      return { loading: false, bingResults: [], error: null };
    default:
      return state;
  }
};

export default reducer;
