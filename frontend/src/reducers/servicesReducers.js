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
  SERVICE_UPDATE_RESET,
} from "../constants/servicesConstants";

export const servicesReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return { loading: true, services: [] };
    case SERVICE_LIST_SUCCESS:
      return {
        loading: false,
        services: action.payload,
      };
    case SERVICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serviceDetailsReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case SERVICE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SERVICE_DETAILS_SUCCESS:
      return { loading: false, service: action.payload };
    case SERVICE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serviceUpdateReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case SERVICE_UPDATE_REQUEST:
      return { loading: true };
    case SERVICE_UPDATE_SUCCESS:
      return { loading: false, success: true, service: action.payload };
    case SERVICE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SERVICE_UPDATE_RESET:
      return {
        service: {},
      };
    default:
      return state;
  }
};
