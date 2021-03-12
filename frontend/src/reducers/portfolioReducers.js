import {
  PORTFOLIO_REQUEST,
  PORTFOLIO_SUCCESS,
  PORTFOLIO_FAIL,
  PORTFOLIO_UPDATE_REQUEST,
  PORTFOLIO_UPDATE_SUCCESS,
  PORTFOLIO_UPDATE_FAIL,
  PORTFOLIO_UPDATE_RESET,
} from "../constants/portfolioConstants";

export const portfolioReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case PORTFOLIO_REQUEST:
      return { loading: true, portfolio: {} };
    case PORTFOLIO_SUCCESS:
      return { loading: false, portfolio: action.payload };
    case PORTFOLIO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const portfolioUpdateReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case PORTFOLIO_UPDATE_REQUEST:
      return { loading: true };
    case PORTFOLIO_UPDATE_SUCCESS:
      return { loading: false, success: true, portfolio: action.payload };
    case PORTFOLIO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PORTFOLIO_UPDATE_RESET:
      return {
        portfolio: {},
      };
    default:
      return state;
  }
};
