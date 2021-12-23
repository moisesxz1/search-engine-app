import { GoogleResultsActionType } from '../action-types';
import { GoogleResultsAction } from '../actions/';

export interface GoogleResultsState {
  loading: boolean;
  error: string | null;
  googleResults: string[];
}

const initialState = {
  loading: false,
  error: null,
  googleResults: [],
};

const reducer = (state: GoogleResultsState = initialState, action: GoogleResultsAction): GoogleResultsState => {
  switch (action.type) {
    case GoogleResultsActionType.FETCH_RESULTS_GOOGLE:
      return { loading: true, googleResults: [], error: null };
    case GoogleResultsActionType.FETCH_RESULTS_GOOGLE_SUCCESS:
      return { loading: false, googleResults: action.payload, error: null };
    case GoogleResultsActionType.FETCH_RESULTS_GOOGLE_ERROR:
      return { loading: false, googleResults: [], error: action.payload };
    case GoogleResultsActionType.FETCH_RESULTS_GOOGLE_RESET:
      return { loading: false, googleResults: [], error: null };
    default:
      return state;
  }
};

export default reducer;
