import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import portfolio from "./data/portfolio.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/portfolio", (req, res) => {
  res.send(portfolio);
});

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode  on port ${PORT}`.yellow
      .bold
  )
);
