import { SEARCH_QUERY_SUCCEEDED,
         SEARCH_QUERY_FAILED,
         PLAY_TRACK,
         ADD_TRACK_QUEUE,
         PLAY_TRACK_QUEUE,
} from 'actions/const';

const initState = {
  tracks: [],
  queue: [],
  playing: null,
};

export default function tracks(state = initState, action) {
  switch (action.type) {
    case SEARCH_QUERY_SUCCEEDED:
      return {
        ...state,
        tracks: action.tracks,
      };
    case SEARCH_QUERY_FAILED:
      return {
        ...state,
        message: action.message,
      };
    case PLAY_TRACK:
      return {
        ...state,
        playing: action.track,
      };
    case ADD_TRACK_QUEUE:
      return Object.assign({}, state, {
        queue: [
          ...state.queue,
          action.track,
        ],
      });
    case PLAY_TRACK_QUEUE:
      const track = state.queue.shift();
      return {
        ...state,
        playing: track,
        queue: state.queue,
      };
    default:
      return state;
  }
}
