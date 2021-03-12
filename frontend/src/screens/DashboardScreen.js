import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import EditServiceForm from "../components/forms/EditServiceForm";
import EditSocialProfileForm from "../components/forms/EditSocialProfileForm";
import AdminAsideNav from "../components/AdminAsideNav";
import UserList from "../components/UserList";
import AdminAboutSection from "../components/adminSections/AdminAboutSection";
import AdminHeroSection from "../components/adminSections/AdminHeroSection";
import AdminExperienceSection from "../components/adminSections/AdminExperienceSection";
import EditExperienceForm from "../components/forms/EditExperienceForm";
import AdminSkillsSection from "../components/adminSections/AdminSkillsSection";
import EditSkillForm from "../components/forms/EditSkillForm";
import AdminQualificationsSection from "../components/adminSections/AdminQualificationSection";
import EditQualificationForm from "../components/forms/EditQualificationForm";
import AdminProjectsSection from "../components/adminSections/AdminProjectsSection";
import EditProjectForm from "../components/forms/EditProjectForm";

const DashboardScreen = () => {
  let match = useRouteMatch();

  return (
    <>
      <AdminAsideNav />
      <Switch>
        <Route
          path={`${match.path}/heroForm`}
          component={AdminHeroSection}
          exact
        />
        <Route
          path={`${match.path}/aboutSection`}
          component={AdminAboutSection}
          exact
        />
        <Route
          path={`${match.path}/aboutSection/services/:id`}
          component={EditServiceForm}
        />
        <Route
          path={`${match.path}/aboutSection/socialProfiles/:id`}
          component={EditSocialProfileForm}
        />
        <Route
          path={`${match.path}/experienceSection`}
          component={AdminExperienceSection}
          exact
        />
        <Route
          path={`${match.path}/experienceSection/:id`}
          component={EditExperienceForm}
        />
        <Route
          path={`${match.path}/skillSection`}
          component={AdminSkillsSection}
          exact
        />
        <Route
          path={`${match.path}/skillSection/:id`}
          component={EditSkillForm}
        />
        <Route
          path={`${match.path}/qualificationSection`}
          component={AdminQualificationsSection}
          exact
        />
        <Route
          path={`${match.path}/qualificationSection/:id`}
          component={EditQualificationForm}
        />
        <Route
          path={`${match.path}/projectSection`}
          component={AdminProjectsSection}
          exact
        />
        <Route
          path={`${match.path}/projectSection/:id`}
          component={EditProjectForm}
        />
        <Route path={`${match.path}/userlist`} component={UserList} exact />
      </Switch>
    </>
  );
};

export default DashboardScreen;
