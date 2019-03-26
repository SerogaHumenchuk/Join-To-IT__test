import actionTypes from '../actionTypes';

const randomQouteByAuthorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_RANDOM_AUTHOR_QOUTE_SUCCESS:
      return payload.data.find(el => el.whom === payload.author);
    default:
      return state;
  }
};
export default randomQouteByAuthorReducer;
