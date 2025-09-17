// routes/userRoutes.js
import express from "express";
import { createUser, getUsers } from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/", createUser); // POST /users
userRoutes.get("/", getUsers); // GET /users

export default userRoutes;
