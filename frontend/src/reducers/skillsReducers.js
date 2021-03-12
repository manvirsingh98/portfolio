import {
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
  SKILL_LIST_FAIL,
  SKILL_DETAILS_REQUEST,
  SKILL_DETAILS_SUCCESS,
  SKILL_DETAILS_FAIL,
  SKILL_UPDATE_REQUEST,
  SKILL_UPDATE_SUCCESS,
  SKILL_UPDATE_FAIL,
  SKILL_UPDATE_RESET,
} from "../constants/skillsConstants";

export const skillsReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case SKILL_LIST_REQUEST:
      return { loading: true, skills: [] };
    case SKILL_LIST_SUCCESS:
      return {
        loading: false,
        skills: action.payload,
      };
    case SKILL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const skillDetailsReducer = (state = { skill: {} }, action) => {
  switch (action.type) {
    case SKILL_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SKILL_DETAILS_SUCCESS:
      return { loading: false, skill: action.payload };
    case SKILL_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const skillUpdateReducer = (state = { skill: {} }, action) => {
  switch (action.type) {
    case SKILL_UPDATE_REQUEST:
      return { loading: true };
    case SKILL_UPDATE_SUCCESS:
      return { loading: false, success: true, skill: action.payload };
    case SKILL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SKILL_UPDATE_RESET:
      return {
        skill: {},
      };
    default:
      return state;
  }
};
