import asyncHandler from "express-async-handler";
import Portfolio from "../models/portfolioModel.js";

// @desc    create a new portfolio
// @route   POST /api/portfolio
// @access  Private/Admin
const createPortfolio = asyncHandler(async (req, res) => {
  const { basics, skills, services, education, work, projects } = req.body;

  const portfolio = await Portfolio.create({
    basics,
    skills,
    services,
    education,
    work,
    projects,
  });

  if (portfolio) {
    res.status(201).json(portfolio);
  } else {
    res.status(400);
    throw new Error("Invalid portfolio data");
  }
});

// // @desc    Get pportfolio
// // @route   GET /api/portfolio
// // @access  Private/Admin
// const getPortflio= asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if (user) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//       });
//     } else {
//       res.status(404);
//       throw new Error("User not found");
//     }
//   });

export { createPortfolio };
