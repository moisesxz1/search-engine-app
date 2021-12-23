import { BingResultsActionType } from '../action-types';

interface FetchResultsBingAction {
  type: BingResultsActionType.FETCH_RESULTS_BING;
}

interface FetchResultsBingSuccessAction {
  type: BingResultsActionType.FETCH_RESULTS_BING_SUCCESS;
  payload: string[];
}

interface FetchResultsBingErrorAction {
  type: BingResultsActionType.FETCH_RESULTS_BING_ERROR;
  payload: string;
}

interface FetchResultsBingResetAction {
  type: BingResultsActionType.FETCH_RESULTS_BING_RESET;
}

export type BingResultsAction =
  | FetchResultsBingAction
  | FetchResultsBingSuccessAction
  | FetchResultsBingErrorAction
  | FetchResultsBingResetAction;
