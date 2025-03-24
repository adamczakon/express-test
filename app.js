const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// app.use(cors());

app.use(
  cors({
    origin: "*",
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

app.get("/get-cookie", (req, res) => {
  const cookie = req.cookies["test-cookie"];
  res.json({ cookie });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
