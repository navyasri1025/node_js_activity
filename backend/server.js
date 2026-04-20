const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "student.json";

app.get("/student", (req, res) => {
    const data = fs.readFileSync(FILE);
    res.json(JSON.parse(data));
});

app.post("/student", (req, res) => {
    fs.writeFileSync(FILE, JSON.stringify(req.body, null, 2));
    res.json({ message: "Updated successfully" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
