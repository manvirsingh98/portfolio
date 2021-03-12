import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";

import portfolio from "./data/modified-portfolio.js";
import services from "./data/services.js";
import socialProfiles from "./data/socialProfiles.js";
import skills from "./data/skills.js";
import activatedPortfolio from "./data/activated-portfolio.js";
import experiences from "./data/experiences.js";
import educations from "./data/education.js";
import projects from "./data/projects.js";

import {
  Portfolio,
  Services,
  SocialProfiles,
  Skills,
  Experiences,
  Qualifications,
  Projects,
} from "./models/portfolioModel.js";
import User from "./models/userModel.js";
import ActivatedPortfolio from "./models/activatedPortfolioModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Portfolio.deleteMany();
    await User.deleteMany();
    await Services.deleteMany();
    await SocialProfiles.deleteMany();
    await Skills.deleteMany();
    await ActivatedPortfolio.deleteMany();
    await Experiences.deleteMany();
    await Qualifications.deleteMany();
    await Projects.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const samplePortfolio = { ...portfolio, user: adminUser };

    // const samplePortfolio = portfolio.map((portfolio) => {
    //   return { ...portfolio, user: adminUser };
    // });

    const createdPortfolio = await Portfolio.insertMany(samplePortfolio);
    const portfolioId = createdPortfolio[0]._id;

    const sampleActivatedPortfolio = {
      ...activatedPortfolio,
      portfolioId: portfolioId,
      user: adminUser,
    };

    const sampleServices = services.map((service) => {
      return { ...service, portfolioId: portfolioId._id, user: adminUser };
    });

    const sampleSocialProfiles = socialProfiles.map((socialProfile) => {
      return {
        ...socialProfile,
        portfolioId: portfolioId._id,
        user: adminUser,
      };
    });

    const sampleSkills = skills.map((skill) => {
      return {
        ...skill,
        portfolioId: portfolioId._id,
        user: adminUser,
      };
    });

    const sampleExperiences = experiences.map((experience) => {
      return {
        ...experience,
        portfolioId: portfolioId._id,
        user: adminUser,
      };
    });

    const sampleQualification = educations.map((education) => {
      return {
        ...education,
        portfolioId: portfolioId._id,
        user: adminUser,
      };
    });

    const sampleProject = projects.map((project) => {
      return {
        ...project,
        portfolioId: portfolioId._id,
        user: adminUser,
      };
    });

    await Services.insertMany(sampleServices);
    await SocialProfiles.insertMany(sampleSocialProfiles);
    await Skills.insertMany(sampleSkills);
    await ActivatedPortfolio.insertMany(sampleActivatedPortfolio);
    await Experiences.insertMany(sampleExperiences);
    await Qualifications.insertMany(sampleQualification);
    await Projects.insertMany(sampleProject);

    console.log("Data imported!".green.inverse);
    console.log(`Portfolio ID: ${sampleActivatedPortfolio.portfolioId}`);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Portfolio.deleteMany();
    await User.deleteMany();
    await Services.deleteMany();
    await SocialProfiles.deleteMany();
    await Skills.deleteMany();
    await ActivatedPortfolio.deleteMany();
    await Experiences.deleteMany();
    await Qualifications.deleteMany();
    await Projects.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
