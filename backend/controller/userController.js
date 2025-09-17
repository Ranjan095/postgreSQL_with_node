import { pool } from "../db.js";
import { insertUserQuery } from "../query.js";

// Create new user

export const createUser = async (req, res) => {
  const { name, age, email, password } = req.body;

  // basic validation
  if (!name || !age || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, Age, email, and password are required" });
  }

  try {
    const result = await pool.query(insertUserQuery, [
      name,
      age,
      email,
      password,
    ]);
    res.status(201).json({
      message: "✅ User created successfully",
      user: result.rows[0],
    });
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({ error: "Email already exists" });
    }
    console.error("❌ Error creating user:", err.message);
    res.status(500).json({ message: err.message, error: "Database error" });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Error fetching users:", err.message);
    res.status(500).json({ error: "Database error" });
  }
};
