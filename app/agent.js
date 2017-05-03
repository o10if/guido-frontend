const API_ROOT = 'https://guido-backend.herokuapp.com';

async function makeRequest(url, params, method) {
  try {
    let response = await fetch(`${API_ROOT}${url}`, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    let responseJson = await response.json();
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export const Route = {
  all: () =>
    makeRequest(`/routes`),
  get: (id) =>
    makeRequest(`/routes/${id}`),
  post: (id, route) =>
    makeRequest(`/routes/${id}`, route, 'POST')
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
