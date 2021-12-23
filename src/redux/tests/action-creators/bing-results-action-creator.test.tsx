import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { fetchResultsBing } from '../../action-creators';
import { AnyAction } from 'redux';
import { BingResultsState } from '../../reducers/bingResultsReducer';
import { BingResultsActionType } from '../../action-types';

type DispatchExts = ThunkDispatch<BingResultsState, void, AnyAction>;

const mockStore = configureStore<BingResultsState, DispatchExts>([thunk]);

const store = mockStore({
  loading: false,
  error: null,
  bingResults: ['sandals', 'sneakers', 'shoes'],
});

describe('Tests on the bing-results-action-creator', () => {
  test('It should fetch results from bing', async () => {
    const bingResults = [
      'SANDALS® Resorts: Caribbean 5 Star Luxury Included …',
      'Amazon.com: sandals',
      'Sandals® All-Inclusive Resorts & Caribbean Vacation …',
      "Women's Sandals & Flip-Flops - Amazon.com",
    ];
    await store.dispatch(fetchResultsBing('sandals'));

    const actions = store.getActions();

    expect(actions[3]).toEqual({
      type: BingResultsActionType.FETCH_RESULTS_BING_SUCCESS,
      payload: bingResults,
    });
  });
});
