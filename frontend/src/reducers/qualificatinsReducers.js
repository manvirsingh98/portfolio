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
  QUALIFICATION_UPDATE_RESET,
} from "../constants/qualificationsConstants";

export const qualificationsReducer = (
  state = { qualifications: [] },
  action
) => {
  switch (action.type) {
    case QUALIFICATION_LIST_REQUEST:
      return { loading: true, qualifications: [] };
    case QUALIFICATION_LIST_SUCCESS:
      return {
        loading: false,
        qualifications: action.payload,
      };
    case QUALIFICATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const qualificationDetailsReducer = (
  state = { qualification: {} },
  action
) => {
  switch (action.type) {
    case QUALIFICATION_DETAILS_REQUEST:
      return { loading: true, ...state };
    case QUALIFICATION_DETAILS_SUCCESS:
      return { loading: false, qualification: action.payload };
    case QUALIFICATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const qualificationUpdateReducer = (
  state = { qualification: {} },
  action
) => {
  switch (action.type) {
    case QUALIFICATION_UPDATE_REQUEST:
      return { loading: true };
    case QUALIFICATION_UPDATE_SUCCESS:
      return { loading: false, success: true, qualification: action.payload };
    case QUALIFICATION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case QUALIFICATION_UPDATE_RESET:
      return {
        qualification: {},
      };
    default:
      return state;
  }
};
