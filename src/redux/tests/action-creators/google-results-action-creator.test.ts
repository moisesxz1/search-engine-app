import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { fetchResultsGoogle } from '../../action-creators';
import { AnyAction } from 'redux';
import { GoogleResultsState } from '../../reducers/googleResultsReducer';
import { GoogleResultsActionType } from '../../action-types';

type DispatchExts = ThunkDispatch<GoogleResultsState, void, AnyAction>;

const mockStore = configureStore<GoogleResultsState, DispatchExts>([thunk]);

const store = mockStore({
  loading: false,
  error: null,
  googleResults: ['coffee', 'milk', 'cheese'],
});

describe('Tests on the google-results-action-creator', () => {
  test('It should fetch results from google', async () => {
    const googleResults = [
      'Coffee - Wikipedia',
      'Coffee | The Nutrition Source',
      'Coffee health benefits: Diabetes, heart health, liver cancer ...',
      '13 Health Benefits of Coffee, Based on Science - Healthline',
      '9 Reasons Why (the Right Amount of) Coffee Is Good for You',
      'Starbucks Coffee Company',
      '#coffee hashtag on Instagram • Photos and Videos',
      'What is Coffee?',
    ];
    await store.dispatch(fetchResultsGoogle('coffee'));

    const actions = store.getActions();

    expect(actions[3]).toEqual({
      type: GoogleResultsActionType.FETCH_RESULTS_GOOGLE_SUCCESS,
      payload: googleResults,
    });
  });
});
