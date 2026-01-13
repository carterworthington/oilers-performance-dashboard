// server/index.js
import express from "express";
import cors from "cors";
import { players } from "./mockData.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/players", (req, res) => {
  res.json(players);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
