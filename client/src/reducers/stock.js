import { FETCH_STOCK_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes';

const stocks = (state = { stocks: [] }, action) => {
  switch(action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_STOCK_BY_SEARCH:
        return { ...state, stocks: action.payload };
    default:
        return state;
  }
};

export default stocks;