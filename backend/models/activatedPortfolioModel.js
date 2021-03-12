import mongoose from "mongoose";

const ActivatedPortfolioSchema = mongoose.Schema(
  {
    portfolioId: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ActivatedPortfolio = mongoose.model(
  "ActivatedPortfolio",
  ActivatedPortfolioSchema
);

export default ActivatedPortfolio;
