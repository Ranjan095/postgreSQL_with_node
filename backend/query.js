export const createUserTable = `CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT,
  email VARCHAR(150) NOT NULL,
  password VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

export const insertUserQuery = `
  INSERT INTO users (name, age, email, password)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`;
