const express = require("express");
const cors = require("cors");
const routes = require("./routes/index")

const app = express();

const allowedOrigins = [
  'https://movie-ticket-booking-flax.vercel.app/',
  'http://localhost:5173'
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

app.use(express.json());
app.use("/api",routes)

module.exports = app;