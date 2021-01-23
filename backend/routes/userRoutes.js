import express from "express";
const router = express.Router();
import {
  authUsers,
  registerUsers,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUsers).get(protect, admin, getUsers);
router.post("/login", authUsers);

export default router;
