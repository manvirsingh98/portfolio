import mongoose from "mongoose";

const portfolioSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    summary: {
      type: String,
    },
    resumePath: { type: String },
    aboutTitle: { type: String },
    aboutSummary: { type: String },

    // skillSection: {
    //   title: { type: String },
    //   summary: { type: String },
    //   professionalSkills: [{ icon: { type: String }, name: { type: String } }],
    //   technicalSkills: [
    //     {
    //       icon: { type: String },
    //       name: { type: String },
    //       stars: { type: String },
    //     },
    //   ],
    // },
    // experienceSection: [
    //   {
    //     title: { type: String },
    //     experiences: [experienceSchema],
    //   },
    // ],
    // QualificationSection: [educationSchema],
    // workSection: [workSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const servicesSchema = mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    icon: { type: String },

    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Portfolio",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const socialProfilesSchema = mongoose.Schema(
  {
    network: {
      type: String,
    },
    icon: {
      type: String,
    },
    url: {
      type: String,
    },

    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Portfolio",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const skillsSchema = mongoose.Schema(
  {
    icon: { type: String },
    name: { type: String },
    value: { type: String },
    category: { type: String },

    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Portfolio",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const experienceSchema = mongoose.Schema(
  {
    companyName: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    position: { type: String },
    category: { type: String },
    duties: [{ duty: { type: String } }],
    usedTechnologies: [{ icon: { type: String }, name: { type: String } }],
    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Portfolio",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const qualificationSchema = mongoose.Schema(
  {
    institution: { type: String },
    summary: { type: String },
    studyType: { type: String },
    duration: { type: String },
    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Portfolio",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const projectchema = mongoose.Schema(
  {
    title: { type: String },
    summary: { type: String },
    image: { type: String },
    technologies: [],
    url: { type: String },
    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Portfolio",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
const Services = mongoose.model("Services", servicesSchema);
const SocialProfiles = mongoose.model("SocialProfiles", socialProfilesSchema);
const Skills = mongoose.model("Skills", skillsSchema);
const Experiences = mongoose.model("Experiences", experienceSchema);
const Qualifications = mongoose.model("Qualifications", qualificationSchema);
const Projects = mongoose.model("Project", projectchema);

export {
  Portfolio,
  Services,
  SocialProfiles,
  Skills,
  Experiences,
  Qualifications,
  Projects,
};
