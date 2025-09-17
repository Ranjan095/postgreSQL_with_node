import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectToDatabase } from "./db.js";
import allRoutes from "./routes/allRoutes.js";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use("/api", allRoutes);

await connectToDatabase();
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
