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
  SOCIAL_PROFILE_UPDATE_RESET,
} from "../constants/socialProfilesConstants";

export const socialProfilesReducer = (
  state = { socialProfiles: [] },
  action
) => {
  switch (action.type) {
    case SOCIAL_PROFILES_REQUEST:
      return { loading: true, socialProfiles: [] };
    case SOCIAL_PROFILES_SUCCESS:
      return { loading: false, socialProfiles: action.payload };
    case SOCIAL_PROFILES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const socialProfileDetailsReducer = (
  state = { socialProfile: {} },
  action
) => {
  switch (action.type) {
    case SOCIAL_PROFILE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SOCIAL_PROFILE_DETAILS_SUCCESS:
      return { loading: false, socialProfile: action.payload };
    case SOCIAL_PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const socialProfileUpdateReducer = (
  state = { socialProfile: {} },
  action
) => {
  switch (action.type) {
    case SOCIAL_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case SOCIAL_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, socialProfile: action.payload };
    case SOCIAL_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SOCIAL_PROFILE_UPDATE_RESET:
      return {
        socialProfile: {},
      };
    default:
      return state;
  }
};
