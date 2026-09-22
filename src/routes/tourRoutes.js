import express from "express";
import { createTour, getActiveTours, reserveSeats } from "../controllers/tourController.js";

const router = express.Router();
router.get("/tours", getActiveTours);
router.post("/tours", createTour);
router.post("/tours/reserve", reserveSeats);

export default router;