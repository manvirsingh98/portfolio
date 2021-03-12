import axios from "axios";

import {
  QUALIFICATION_LIST_REQUEST,
  QUALIFICATION_LIST_SUCCESS,
  QUALIFICATION_LIST_FAIL,
  QUALIFICATION_DETAILS_REQUEST,
  QUALIFICATION_DETAILS_SUCCESS,
  QUALIFICATION_DETAILS_FAIL,
  QUALIFICATION_UPDATE_REQUEST,
  QUALIFICATION_UPDATE_SUCCESS,
  QUALIFICATION_UPDATE_FAIL,
} from "../constants/qualificationsConstants";

export const listQualifications = () => async (dispatch) => {
  try {
    dispatch({ type: QUALIFICATION_LIST_REQUEST });

    const { data } = await axios.get(`/api/portfolio/qualifications`);

    dispatch({
      type: QUALIFICATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUALIFICATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listQualificationDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: QUALIFICATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/portfolio/qualifications/${id}`);

    dispatch({
      type: QUALIFICATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUALIFICATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateQualification = (qualification) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: QUALIFICATION_UPDATE_REQUEST,
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

    const { data } = await axios.put(
      `/api/portfolio/qualifications/${qualification._id}`,
      qualification,
      config
    );

    dispatch({
      type: QUALIFICATION_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUALIFICATION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
