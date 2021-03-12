import axios from "axios";

import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_SUCCESS,
  SERVICE_UPDATE_FAIL,
} from "../constants/servicesConstants";

export const listServices = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_LIST_REQUEST });

    const { data } = await axios.get(`/api/portfolio/services`);

    dispatch({
      type: SERVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listServiceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/portfolio/services/${id}`);

    dispatch({
      type: SERVICE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateService = (service) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICE_UPDATE_REQUEST,
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
      `/api/portfolio/services/${service._id}`,
      service,
      config
    );

    dispatch({
      type: SERVICE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
