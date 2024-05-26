import { Router } from "express";
import { getHealthy } from "../controller/controller";

export const route = Router();
route.get("/healthy", getHealthy);
