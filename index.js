const express = require("express");
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

app = express();
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  res.render("home");
});
app.post("/data", async (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  //res.send(data);

  res.render("data", { data });
});
app.listen(8000, () => {
  console.log("listening on port 8000");
});
