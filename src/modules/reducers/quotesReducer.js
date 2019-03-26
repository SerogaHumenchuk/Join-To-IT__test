import actionTypes from '../actionTypes';

const quotesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_QUOTES:
      return Array.from(new Set(payload.data.map(el => el.whom))).map(whom => {
        return {
          whom,
          imgSrc: payload.data.find(el => el.whom === whom).imgSrc,
          quote: payload.data.find(el => el.whom === whom).quote,
        };
      });
    default:
      return state;
  }
};

export default quotesReducer;
