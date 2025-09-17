import express from "express";
import userRoutes from "./userRoutes.js";
import { createAllTables } from "../controller/createTable.js";

const allRoutes = express.Router();

allRoutes.post("/create-tables", createAllTables);
allRoutes.use("/users", userRoutes);

export default allRoutes;
