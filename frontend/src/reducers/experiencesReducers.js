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
  EXPERIENCE_UPDATE_RESET,
} from "../constants/experiencesConstants";

export const experiencesReducer = (state = { experiences: [] }, action) => {
  switch (action.type) {
    case EXPERIENCE_LIST_REQUEST:
      return { loading: true, experiences: [] };
    case EXPERIENCE_LIST_SUCCESS:
      return {
        loading: false,
        experiences: action.payload,
      };
    case EXPERIENCE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const experienceDetailsReducer = (
  state = { experience: {} },
  action
) => {
  switch (action.type) {
    case EXPERIENCE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case EXPERIENCE_DETAILS_SUCCESS:
      return { loading: false, experience: action.payload };
    case EXPERIENCE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const experienceUpdateReducer = (state = { experience: {} }, action) => {
  switch (action.type) {
    case EXPERIENCE_UPDATE_REQUEST:
      return { loading: true };
    case EXPERIENCE_UPDATE_SUCCESS:
      return { loading: false, success: true, experience: action.payload };
    case EXPERIENCE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case EXPERIENCE_UPDATE_RESET:
      return {
        experience: {},
      };
    default:
      return state;
  }
};
