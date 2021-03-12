import express from "express";
const router = express.Router();
import {
  getPortflio,
  updatePortflio,
  getServices,
  getServiceById,
  updateServiceById,
  getSocialProfiles,
  getSocialProfilesById,
  updateSocialProfileById,
  getSkills,
  getSkillsById,
  updateskillById,
  getExperiences,
  getExperiencesById,
  updateExperienceById,
  getQualifications,
  getQualificationById,
  updatesQualificationById,
  getProjects,
  getProjectById,
  updatesProjectById,
} from "../controllers/portfolioController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.route("/").post(protect, admin, createPortfolio);
router.route("/").get(getPortflio).put(protect, updatePortflio);
router.route("/services/").get(getServices);
router.route("/services/:id").get(getServiceById).put(updateServiceById);

//Social Profiles routes
router.route("/socialProfiles/").get(getSocialProfiles);
router
  .route("/socialProfiles/:id")
  .get(getSocialProfilesById)
  .put(protect, updateSocialProfileById);

//Skills routes
router.route("/skills/").get(getSkills);
router.route("/skills/:id").get(getSkillsById).put(protect, updateskillById);

//Qualifications routes
router.route("/qualifications/").get(getQualifications);
router
  .route("/qualifications/:id")
  .get(getQualificationById)
  .put(protect, updatesQualificationById);

//Projects routes
router.route("/projects/").get(getProjects);
router
  .route("/projects/:id")
  .get(getProjectById)
  .put(protect, updatesProjectById);

//Experiences routes
router.route("/experiences/").get(getExperiences);
router
  .route("/experiences/:id")
  .get(getExperiencesById)
  .put(protect, updateExperienceById);
export default router;
