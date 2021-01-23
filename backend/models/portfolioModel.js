import mongoose from "mongoose";

const portfolioSchema = mongoose.Schema(
  {
    basics: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      keywords: [],
      email: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      picture: {
        type: String,
      },
      summary: {
        type: String,
      },
      location: {
        address: {
          type: String,
        },
        postalCode: {
          type: String,
        },
        city: {
          type: String,
        },
        countryCode: {
          type: String,
        },
        region: {
          type: String,
        },
      },
      profiles: [
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
        },
      ],
    },
    skills: [
      {
        type: { type: String },
        value: { type: String },
        icon: { type: String },
      },
    ],

    services: [
      {
        name: { type: String },
        description: { type: String },
        icon: { type: String },
      },
    ],

    education: [
      {
        institution: { type: String },
        area: { type: String },
        studyType: { type: String },
        duration: { type: String },
        courses: [],
      },
    ],
    work: [
      {
        company: { type: String },
        duration: { type: String },
        position: { type: String },
        highlights: [],
      },
    ],
    projects: [
      {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        technologies: [],
        url: { type: String },
      },
    ],
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

export default Portfolio;
