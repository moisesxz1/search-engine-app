import bingResultsReducer from '../../reducers/bingResultsReducer';
import { BingResultsActionType } from '../../action-types';

describe('Testing the bingResultsReducer', () => {
  const initialState = { loading: false, error: null, bingResults: [] };
  test('It should return the default state', () => {
    const state = bingResultsReducer(initialState, { type: BingResultsActionType.FETCH_RESULTS_BING_RESET });

    expect(state).toEqual(initialState);
  });

  test('It should return  an updated store state upon succesful action', () => {
    const successfulStoreUpdate = { loading: false, error: null, bingResults: ['Coffee', 'Milk', 'Cheese'] };

    const state = bingResultsReducer(initialState, {
      type: BingResultsActionType.FETCH_RESULTS_BING_SUCCESS,
      payload: successfulStoreUpdate.bingResults,
    });

    expect(state).toEqual(successfulStoreUpdate);
  });

  test('It should return an error state upon store update failure', () => {
    const failedStoreUpdate = { loading: false, error: 'Error while updating the store', bingResults: [] };

    const state = bingResultsReducer(initialState, {
      type: BingResultsActionType.FETCH_RESULTS_BING_ERROR,
      payload: failedStoreUpdate.error,
    });

    expect(state).toEqual(failedStoreUpdate);
  });

  test('It should return a loading state upon FETCH_RESULTLS_BING action fired', () => {
    const loadingStoreState = { loading: true, error: null, bingResults: [] };

    const state = bingResultsReducer(initialState, {
      type: BingResultsActionType.FETCH_RESULTS_BING,
    });

    expect(state).toEqual(loadingStoreState);
  });
});
