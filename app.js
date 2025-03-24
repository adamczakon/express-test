const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

// Routes
app.get("/set-cookie", (req, res) => {
  res.cookie("test-cookie", "hello-world", {
    httpOnly: true,
    secure: true, // Set to true for HTTPS
    sameSite: "None",
  });
  res.json({ message: "Cookie has been set!" });
});

app.post("/set-cookie", (req, res) => {
  const { cookieName, cookieValue } = req.body;

  // Set a cookie with the provided name and value
  res.cookie(cookieName || "default-cookie", cookieValue || "default-value", {
    httpOnly: true,
    secure: true, // Set to true for HTTPS
    sameSite: "None",
  });

  res.json({ message: "Cookie has been set via POST!" });
});

app.get("/get-cookie", (req, res) => {
  const cookie = req.cookies["test-cookie"];
  res.json({ cookie });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
