import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { search } from 'api';
import { SEARCH_QUERY,
         SEARCH_QUERY_FAILED,
         SEARCH_QUERY_SUCCEEDED,
} from 'actions/const';

function* fetchTracks(action) {
  try {
    const tracks = yield call(search, action.query);
    yield put({ type: SEARCH_QUERY_SUCCEEDED, tracks: tracks.data });
  } catch (e) {
    yield put({ type: SEARCH_QUERY_FAILED, message: e.message });
  }
}

function* searchQuery() {
  yield* takeLatest(SEARCH_QUERY, fetchTracks);
}

export default searchQuery;
