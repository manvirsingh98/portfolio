import axios from "axios";

export const getPortfolio = () => async (dispatch) => {
  try {
    dispatch({ type: "PORTFOLIO_REQUEST" });

    const { data } = await axios.get("/portfolio");

    dispatch({
      type: "PORTFOLIO_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PORTFOLIO_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
