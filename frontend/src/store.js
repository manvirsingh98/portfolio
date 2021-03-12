import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  portfolioReducer,
  portfolioUpdateReducer,
} from "./reducers/portfolioReducers";
import {
  servicesReducer,
  serviceDetailsReducer,
  serviceUpdateReducer,
} from "./reducers/servicesReducers";
import {
  experiencesReducer,
  experienceDetailsReducer,
  experienceUpdateReducer,
} from "./reducers/experiencesReducers";
import {
  socialProfilesReducer,
  socialProfileDetailsReducer,
  socialProfileUpdateReducer,
} from "./reducers/socialProfilesReducers";

import {
  skillsReducer,
  skillDetailsReducer,
  skillUpdateReducer,
} from "./reducers/skillsReducers";
import {
  qualificationsReducer,
  qualificationDetailsReducer,
  qualificationUpdateReducer,
} from "./reducers/qualificatinsReducers";
import {
  projectsReducer,
  projectDetailsReducer,
  projectUpdateReducer,
} from "./reducers/projectsReducers";
import { userLoginReducer, userListReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  portfolioInfo: portfolioReducer,
  portfolioUpdate: portfolioUpdateReducer,
  serviceList: servicesReducer,
  serviceDetails: serviceDetailsReducer,
  serviceUpdate: serviceUpdateReducer,
  skillList: skillsReducer,
  skillDetails: skillDetailsReducer,
  skillUpdate: skillUpdateReducer,
  experienceList: experiencesReducer,
  experienceDetails: experienceDetailsReducer,
  experienceUpdate: experienceUpdateReducer,
  socialProfilesList: socialProfilesReducer,
  socialProfileDetails: socialProfileDetailsReducer,
  socialProfileUpdate: socialProfileUpdateReducer,
  qualificationList: qualificationsReducer,
  qualificationDetails: qualificationDetailsReducer,
  qualificationUpdate: qualificationUpdateReducer,
  projectList: projectsReducer,
  projectDetails: projectDetailsReducer,
  projectUpdate: projectUpdateReducer,
  userLogin: userLoginReducer,
  userList: userListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
