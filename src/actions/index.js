import { SEARCH_QUERY,
         PLAY_TRACK,
         ADD_TRACK_QUEUE,
         PLAY_TRACK_QUEUE,
} from './const';

export function searchQuery(query) {
  return {
    type: SEARCH_QUERY,
    query,
  };
}

export function queueTrack(track) {
  return {
    type: ADD_TRACK_QUEUE,
    track,
  };
}

export function playTrackQueue() {
  return {
    type: PLAY_TRACK_QUEUE,
  };
}

export function playTrack(track) {
  return {
    type: PLAY_TRACK,
    track,
  };
}
