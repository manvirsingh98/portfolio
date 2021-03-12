import axios from "axios";

import {
  PORTFOLIO_REQUEST,
  PORTFOLIO_SUCCESS,
  PORTFOLIO_FAIL,
  PORTFOLIO_UPDATE_REQUEST,
  PORTFOLIO_UPDATE_SUCCESS,
  PORTFOLIO_UPDATE_FAIL,
} from "../constants/portfolioConstants";

export const getPortfolio = () => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_REQUEST });

    const { data } = await axios.get(`/api/portfolio/`);

    dispatch({
      type: PORTFOLIO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePortfolio = (portfolio) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PORTFOLIO_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/portfolio`, portfolio, config);

    dispatch({
      type: PORTFOLIO_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
