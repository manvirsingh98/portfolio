import axios from "axios";

import {
  SOCIAL_PROFILES_REQUEST,
  SOCIAL_PROFILES_SUCCESS,
  SOCIAL_PROFILES_FAIL,
  SOCIAL_PROFILE_DETAILS_REQUEST,
  SOCIAL_PROFILE_DETAILS_SUCCESS,
  SOCIAL_PROFILE_DETAILS_FAIL,
  SOCIAL_PROFILE_UPDATE_REQUEST,
  SOCIAL_PROFILE_UPDATE_SUCCESS,
  SOCIAL_PROFILE_UPDATE_FAIL,
} from "../constants/socialProfilesConstants";

export const getSocialProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: SOCIAL_PROFILES_REQUEST });

    const { data } = await axios.get(`/api/portfolio/socialProfiles`);

    dispatch({
      type: SOCIAL_PROFILES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SOCIAL_PROFILES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listSocialProfileDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SOCIAL_PROFILE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/portfolio/socialProfiles/${id}`);

    dispatch({
      type: SOCIAL_PROFILE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SOCIAL_PROFILE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSocialProfile = (socialProfile) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: SOCIAL_PROFILE_UPDATE_REQUEST,
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
      `/api/portfolio/socialProfiles/${socialProfile._id}`,
      socialProfile,
      config
    );

    dispatch({
      type: SOCIAL_PROFILE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SOCIAL_PROFILE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
