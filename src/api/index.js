import axios from 'axios';

const SOUNDCLOUD_BASE = 'http://api.soundcloud.com';

export const search = query => axios.get('/tracks', {
  baseURL: SOUNDCLOUD_BASE,
  params: {
    client_id: process.env.CLIENT_ID,
    limit: 50,
    q: query,
  },
});

export const fetchUser = id => axios.get(`/users/${id}`, {
  baseURL: SOUNDCLOUD_BASE,
  params: { client_id: process.env.CLIENT_ID },
});
