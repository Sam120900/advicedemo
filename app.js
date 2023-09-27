const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = response.data.slip.advice;
    res.send(`<h1>${advice}</h1>`);
  } catch (error) {
    res.send("<h1>Error fetching advice. Please try again later.</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
