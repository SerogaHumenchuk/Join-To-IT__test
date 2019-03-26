import types from './actionTypes';

// for quotes Categories
export const fetchOuotesRequest = () => ({
  type: types.FETCH_REQUEST_QUOTES,
});

export const fetchOuotesSuccess = data => ({
  type: types.FETCH_SUCCESS_QUOTES,
  payload: {
    data,
  },
});

export const fetchOuotesError = error => ({
  type: types.FETCH_ERROR_QUOTES,
  payload: {
    error,
  },
});

// for random quote
export const fetchRandomQueteRequest = () => ({
  type: types.FETCH_RANDOM_QOUTE_REQUEST,
});

export const fetchRandomQueteSuccess = data => ({
  type: types.FETCH_RANDOM_QOUTE_SUCCESS,
  payload: {
    data,
  },
});

export const fetchRandomQueteError = error => ({
  type: types.FETCH_RANDOM_QOUTE_ERROR,
  payload: {
    error,
  },
});

// for author's random quote
export const fetchRandomAuthorQueteRequest = () => ({
  type: types.FETCH_RANDOM_AUTHOR_QOUTE_REQUEST,
});

export const fetchRandomAuthorQueteSuccess = (data, author) => ({
  type: types.FETCH_RANDOM_AUTHOR_QOUTE_SUCCESS,
  payload: {
    data,
    author,
  },
});

export const fetchRandomAuthorQueteError = error => ({
  type: types.FETCH_RANDOM_AUTHOR_QOUTE_ERROR,
  payload: {
    error,
  },
});
