import express from "express";
const router = express.Router();
import { createPortfolio } from "../controllers/portfolioController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, admin, createPortfolio);
export default router;
