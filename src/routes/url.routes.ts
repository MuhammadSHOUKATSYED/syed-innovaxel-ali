import { Router } from "express";
import {
  createShortURL,
  getOriginalURL,
  updateShortURL,
  deleteShortURL,
  getURLStats,
} from "../controllers/url.controller";

const router = Router();

router.post("/shorten", createShortURL);
router.get("/shorten/:shortCode", getOriginalURL);
router.put("/shorten/:shortCode", updateShortURL);
router.delete("/shorten/:shortCode", deleteShortURL);
router.get("/shorten/:shortCode/stats", getURLStats);

export default router;