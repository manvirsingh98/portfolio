export const portfolioReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case "PORTFOLIO_REQUEST":
      return { loading: true, portfolio: {} };
    case "PORTFOLIO_SUCCESS":
      return { loading: false, portfolio: action.payload };
    case "PORTFOLIO_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
