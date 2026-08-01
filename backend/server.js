const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// DB
const mysql = require("mysql2/promise");

// const connection = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password.",
//     database: "sample_db"
// });

// const [rows] = await connection.execute(
//     "SELECT * FROM users"
// );

// Reactからのアクセスを許可
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "田中", age: 25 },
    { id: 2, name: "佐藤", age: 30 },
    { id: 3, name: "鈴木", age: 28 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server Start : http://localhost:${PORT}`);
});