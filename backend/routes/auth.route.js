import express from "express";
import {
  UserSignUp,
  UserLogin,
  UserLogout,
  onboard,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", UserSignUp);
router.post("/login", UserLogin);
router.post("/logout", UserLogout);

router.post("/onboarding", protectRoute, onboard);

// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export default router;
