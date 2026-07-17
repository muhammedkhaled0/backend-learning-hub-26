import express from "express";
import { createMicrobus, deleteMicrobus, filterFleet, getFleet, getMicrobus, getRating, updateMicrobus } from "../controllers/fleet.controller";

const router = express.Router();

router.get("/", getFleet);

router.get("/filter", filterFleet);

router.get("/rate/:id", getRating);

router.get("/:id", getMicrobus);

router.post("/", createMicrobus);

router.put("/:id", updateMicrobus);

router.delete("/:id", deleteMicrobus);

export default router;