import express from "express";
import { getBike } from "../controller/bike.controller.js";

const router = express.Router();

router.get("/", getBike);

export default router;