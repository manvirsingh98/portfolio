import asyncHandler from "express-async-handler";
import ActivatedPortfolio from "../models/activatedPortfolioModel.js";
import {
  Portfolio,
  Services,
  SocialProfiles,
  Skills,
  Experiences,
  Qualifications,
  Projects,
} from "../models/portfolioModel.js";

// // @desc    create a new portfolio
// // @route   POST /api/portfolio
// // @access  Private/Admin
// const createPortfolio = asyncHandler(async (req, res) => {
//   const { basics, skills, services, education, work, projects } = req.body;

//   const portfolio = await Portfolio.create({
//     basics,
//     skills,
//     services,
//     education,
//     work,
//     projects,
//   });

//   if (portfolio) {
//     res.status(201).json(portfolio);
//   } else {
//     res.status(400);
//     throw new Error("Invalid portfolio data");
//   }
// });

// @desc    Get portfolio/:id but set ENV environment variable
// @route   GET /api/portfolio
// @access  Public
const getPortflio = asyncHandler(async (req, res) => {
  // const { portfolioId } = await ActivatedPortfolio.findById(
  //   "601dca6c23cae276aa804957"
  // );
  const portfolio = await Portfolio.findById(process.env.PORTFOLIO_ID);

  if (portfolio) {
    res.json(portfolio);
  } else {
    res.status(404);
    throw new Error("portfolio not found");
  }
});

// @desc    POST portfolio
// @route   GET /api/portfolio/:id
// @access  Private/Admin
const updatePortflio = asyncHandler(async (req, res) => {
  await Portfolio.updateOne(
    { _id: process.env.PORTFOLIO_ID },
    { $set: req.body },
    (err, results) => {
      if (err) res.json({ err: true });
      else res.json({ success: true });
    }
  );
});

// @desc    Get pportfolio
// @route   GET /api/portfolio
// @access  Private/Admin
const getServices = asyncHandler(async (req, res) => {
  const services = await Services.find({
    portfolioId: process.env.PORTFOLIO_ID,
  });

  if (services) {
    res.json(services);
  } else {
    res.status(404);
    throw new Error("services not found");
  }
});

// @desc    Get pportfolio
// @route   GET /api/portfolio
// @access  Private/Admin
const getServiceById = asyncHandler(async (req, res) => {
  const service = await Services.findById(req.params.id);

  if (service) {
    res.json(service);
  } else {
    res.status(404);
    throw new Error("service not found");
  }
});

// @desc    Get pportfolio
// @route   GET /api/portfolio
// @access  Private/Admin
const updateServiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await Services.findById(id);

  if (!service) {
    res.status(404);
    throw new Error("service not found");
  } else {
    await Services.updateOne(
      { _id: id },
      { $set: req.body },
      (err, results) => {
        if (err) res.json({ err: true });
        else res.json({ success: true });
      }
    );
  }
});

// @desc    Get all social profiles
// @route   GET /api/portfolio/socialProfiles
// @access  Public
const getSocialProfiles = asyncHandler(async (req, res) => {
  const socialProfiles = await SocialProfiles.find({
    portfolioId: process.env.PORTFOLIO_ID,
  });

  if (socialProfiles) {
    res.json(socialProfiles);
  } else {
    res.status(404);
    throw new Error("socialProfiles not found");
  }
});

// @desc    Get social profiles by ID
// @route   GET /api/portfolio
// @access  Public
const getSocialProfilesById = asyncHandler(async (req, res) => {
  const socialProfile = await SocialProfiles.findById(req.params.id);

  if (socialProfile) {
    res.json(socialProfile);
  } else {
    res.status(404);
    throw new Error("socialProfile not found");
  }
});

// @desc    Put pportfolio
// @route   PUT /api/portfolio
// @access  Private/Admin
const updateSocialProfileById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const socialProfile = await SocialProfiles.findById(id);
  if (!socialProfile) {
    res.status(404);
    throw new Error("socialProfile not found");
  } else {
    await SocialProfiles.updateOne(
      { _id: id },
      { $set: req.body },
      (err, results) => {
        if (err) res.json({ err: true });
        else res.json({ success: true });
      }
    );
  }
});

// @desc    Get all skils
// @route   GET /api/portfolio/skills
// @access  Public
const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skills.find({
    portfolioId: process.env.PORTFOLIO_ID,
  });

  if (skills) {
    res.json(skills);
  } else {
    res.status(404);
    throw new Error("Skills not found");
  }
});

// @desc    Get skill by ID
// @route   GET /api/portfolio/skills/:id
// @access  Public
const getSkillsById = asyncHandler(async (req, res) => {
  const skill = await Skills.findById(req.params.id);

  if (skill) {
    res.json(skill);
  } else {
    res.status(404);
    throw new Error("skill not found");
  }
});

// @desc    Put skill by ID
// @route   PUT /api/portfolio/skills/:id
// @access  Private/Admin
const updateskillById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const skill = await Skills.findById(id);
  console.log(id);
  if (!skill) {
    res.status(404);
    throw new Error("skill not found");
  } else {
    await Skills.updateOne({ _id: id }, { $set: req.body }, (err, results) => {
      if (err) res.json({ err: true });
      else res.json({ success: true });
    });
  }
});

// @desc    Get all experiences
// @route   GET /api/portfolio/experiences
// @access  Public
const getExperiences = asyncHandler(async (req, res) => {
  const experiences = await Experiences.find({
    portfolioId: process.env.PORTFOLIO_ID,
  });

  if (experiences) {
    res.json(experiences);
  } else {
    res.status(404);
    throw new Error("experiences not found");
  }
});

// @desc    Get experience by ID
// @route   GET /api/portfolio/experiences/:id
// @access  Public
const getExperiencesById = asyncHandler(async (req, res) => {
  const experience = await Experiences.findById(req.params.id);

  if (experience) {
    res.json(experience);
  } else {
    res.status(404);
    throw new Error("experience not found");
  }
});

// @desc    Put experience by ID
// @route   PUT /api/portfolio/experiences/:id
// @access  Private/Admin
const updateExperienceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const experience = await Experiences.findById(id);
  if (!experience) {
    res.status(404);
    throw new Error("experience not found");
  } else {
    await Experiences.updateOne(
      { _id: id },
      { $set: req.body },
      (err, results) => {
        if (err) res.json({ err: true });
        else res.json({ success: true });
      }
    );
  }
});

// @desc    Get all Qualifications
// @route   GET /api/portfolio/qualifications
// @access  Public
const getQualifications = asyncHandler(async (req, res) => {
  const qualifications = await Qualifications.find({
    portfolioId: process.env.PORTFOLIO_ID,
  });

  if (qualifications) {
    res.json(qualifications);
  } else {
    res.status(404);
    throw new Error("qualifications not found");
  }
});

// @desc    Get qualification by ID
// @route   GET /api/portfolio/qualifications/:id
// @access  Public
const getQualificationById = asyncHandler(async (req, res) => {
  const qualification = await Qualifications.findById(req.params.id);

  if (qualification) {
    res.json(qualification);
  } else {
    res.status(404);
    throw new Error("qualification not found");
  }
});

// @desc    Put qualification by ID
// @route   PUT /api/portfolio/qualifications/:id
// @access  Private/Admin
const updatesQualificationById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const qualification = await Qualifications.findById(id);
  console.log(id);
  if (!qualification) {
    res.status(404);
    throw new Error("qualification not found");
  } else {
    await Qualifications.updateOne(
      { _id: id },
      { $set: req.body },
      (err, results) => {
        if (err) res.json({ err: true });
        else res.json({ success: true });
      }
    );
  }
});

// @desc    Get all projects
// @route   GET /api/portfolio/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Projects.find({
    portfolioId: process.env.PORTFOLIO_ID,
  });

  if (projects) {
    res.json(projects);
  } else {
    res.status(404);
    throw new Error("projects not found");
  }
});

// @desc    Get project by ID
// @route   GET /api/portfolio/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Projects.findById(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("project not found");
  }
});

// @desc    Put project by ID
// @route   PUT /api/portfolio/projects/:id
// @access  Private/Admin
const updatesProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await Projects.findById(id);
  if (!project) {
    res.status(404);
    throw new Error("project not found");
  } else {
    await Projects.updateOne(
      { _id: id },
      { $set: req.body },
      (err, results) => {
        if (err) res.json({ err: true });
        else res.json({ success: true });
      }
    );
  }
});

export {
  getPortflio,
  getServices,
  getServiceById,
  updatePortflio,
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
};
