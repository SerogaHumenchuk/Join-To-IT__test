import axios from 'axios';
import * as actions from './quotesActions';

// for quotes Categories
export const fetchSuccessQoutes = () => dispatch => {
  dispatch(actions.fetchOuotesRequest());
  axios
    .get('https://codepen.io/loomernescent/pen/LRGRaB.js')
    .then(({ data }) => dispatch(actions.fetchOuotesSuccess(data)))
    .catch(error => dispatch(actions.fetchOuotesError(error)));
};

// for random quote
export const fetchRandomQoute = () => dispatch => {
  dispatch(actions.fetchRandomQueteRequest());
  axios
    .get('https://codepen.io/loomernescent/pen/LRGRaB.js')
    .then(({ data }) => dispatch(actions.fetchRandomQueteSuccess(data)))
    .catch(error => dispatch(actions.fetchRandomQueteError(error)));
};

// for author's random quote
export const fetchRandomQouteByAuthor = author => dispatch => {
  dispatch(actions.fetchRandomAuthorQueteRequest());
  axios
    .get('https://codepen.io/loomernescent/pen/LRGRaB.js')
    .then(({ data }) =>
      dispatch(actions.fetchRandomAuthorQueteSuccess(data, author)),
    )
    .catch(error => dispatch(actions.fetchRandomAuthorQueteError(error)));
};
