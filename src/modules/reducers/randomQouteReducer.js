import actionTypes from '../actionTypes';

const randomQouteReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_RANDOM_QOUTE_SUCCESS:
      return payload.data[Math.floor(Math.random() * payload.data.length)];
    default:
      return state;
  }
};
export default randomQouteReducer;
