import { GoogleResultsActionType } from '../action-types';

interface FetchResultsGoogleAction {
  type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE;
}

interface FetchResultsGoogleSuccessAction {
  type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_SUCCESS;
  payload: string[];
}

interface FetchResultsGoogleErrorAction {
  type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_ERROR;
  payload: string;
}

interface FetchResultsGoogleResetAction {
  type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_RESET;
}

export type GoogleResultsAction =
  | FetchResultsGoogleAction
  | FetchResultsGoogleSuccessAction
  | FetchResultsGoogleErrorAction
  | FetchResultsGoogleResetAction;
