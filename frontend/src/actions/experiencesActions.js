import axios from "axios";

import {
  EXPERIENCE_LIST_REQUEST,
  EXPERIENCE_LIST_SUCCESS,
  EXPERIENCE_LIST_FAIL,
  EXPERIENCE_DETAILS_REQUEST,
  EXPERIENCE_DETAILS_SUCCESS,
  EXPERIENCE_DETAILS_FAIL,
  EXPERIENCE_UPDATE_REQUEST,
  EXPERIENCE_UPDATE_SUCCESS,
  EXPERIENCE_UPDATE_FAIL,
} from "../constants/experiencesConstants";

export const listExperiences = () => async (dispatch) => {
  try {
    dispatch({ type: EXPERIENCE_LIST_REQUEST });

    const { data } = await axios.get(`/api/portfolio/experiences`);

    dispatch({
      type: EXPERIENCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listExperienceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXPERIENCE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/portfolio/experiences/${id}`);

    dispatch({
      type: EXPERIENCE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateExperience = (experience) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EXPERIENCE_UPDATE_REQUEST,
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
      `/api/portfolio/experiences/${experience._id}`,
      experience,
      config
    );

    dispatch({
      type: EXPERIENCE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
