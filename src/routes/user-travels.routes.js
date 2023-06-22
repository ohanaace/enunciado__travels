import { Router } from "express";
import userTravelController from "../controllers/user-travels.controllers.js";

const router = Router();

router.get("/passengers/travels", userTravelController.getTravelInfo)

export default router