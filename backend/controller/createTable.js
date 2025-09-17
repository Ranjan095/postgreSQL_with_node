import { pool } from "../db.js";
import { createUserTable } from "../query.js";

export const createAllTables = async (req, res) => {
  try {
    const response = await pool.query(createUserTable);
    console.log(response);
    return res.status(200).json({ message: "Tables created successfully" });
  } catch (error) {
    console.log({ error: error.message });
    return res
      .status(500)
      .json({ error: "Error creating tables", message: error.message });
  }
};
