import googleResultsReducer from '../../reducers/googleResultsReducer';

import { GoogleResultsActionType } from '../../action-types';

describe('Tests on the googleResultsReducer', () => {
  const initialState = { loading: false, error: null, googleResults: [] };
  test('It should return the default state', () => {
    const state = googleResultsReducer(initialState, { type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_RESET });

    expect(state).toEqual(initialState);
  });

  test('It should return  an updated store state upon succesful action', () => {
    const successfulStoreUpdate = { loading: false, error: null, googleResults: ['Coffee', 'Milk', 'Cheese'] };

    const state = googleResultsReducer(initialState, {
      type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_SUCCESS,
      payload: successfulStoreUpdate.googleResults,
    });

    expect(state).toEqual(successfulStoreUpdate);
  });

  test('It should return an error state upon store update failure', () => {
    const failedStoreUpdate = { loading: false, error: 'Error while updating the store', googleResults: [] };

    const state = googleResultsReducer(initialState, {
      type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_ERROR,
      payload: failedStoreUpdate.error,
    });

    expect(state).toEqual(failedStoreUpdate);
  });

  test('It should return a loading state upon FETCH_RESULTLS_GOOGLE action fired', () => {
    const loadingStoreState = { loading: true, error: null, googleResults: [] };

    const state = googleResultsReducer(initialState, {
      type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE,
    });

    expect(state).toEqual(loadingStoreState);
  });
});
