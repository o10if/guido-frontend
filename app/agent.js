var qs = require('qs');

const API_ROOT = 'https://guido-backend.herokuapp.com';

async function makeRequest(url, method, params) {
  try {
    let urlReq = `${API_ROOT}${url}`;
    if (method == 'GET') {
      let query = qs.stringify(params);
      urlReq += `?${query}`;
    }
    let body = null;
    if (method == 'POST') {
      body = JSON.stringify(params);
    }
    let response = await fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    });
    let responseJson = await response.json();
    return responseJson;
  } catch(error) {
    console.warn(error);
  }
}

export const Route = {
  all: (details) =>
    makeRequest(`/routes`, 'GET'),
  search: (params) =>
    makeRequest(`/routes`, 'GET', params),
  get: (id) =>
    makeRequest(`/routes/${id}`, 'GET'),
  post: (id, route) =>
    makeRequest(`/routes/${id}`, 'POST', route),
};

// Careful: maybe not implemented
export const Comment = {
  get: (id) =>
    makeRequest(`/comments/${id}`),
};

export const Event = {
  get: (id) =>
    makeRequest(`/events/${id}`),
};

export const Waypoint = {
  all: () =>
    makeRequest(`/waypoints`),
  get: (id) =>
    makeRequest(`/waypoints/${id}`),
};

export const Landmark = {
  all: () =>
    makeRequest(`/landmarks`),
  get: (id) =>
    makeRequest(`/landmarks/${id}`),
};
