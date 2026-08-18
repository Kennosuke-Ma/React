const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// DB
const db = require("./db");
// const mysql = require("mysql2/promise");

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
// app.get("/api/users", async (req, res) => { 
//     const 
//     const [rows] = await db.execute(
//         "SELECT * FROM users"
//     );

//     res.json(rows);
// });

// 取得許可テーブル
const tables = {
  users: "users",
  departments: "departments"
};

app.get("/api/:table", async (req, res) => {
  const table = tables[req.params.table];

  if (!table) {
    return res.status(404).json({
      message: "Table not found"
    });
  }

  const [rows] = await db.execute(
    `SELECT * FROM ${table}`
  );

  res.json(rows);
});

app.listen(PORT, () => {
    console.log(`Server Start : http://localhost:${PORT}`);
});