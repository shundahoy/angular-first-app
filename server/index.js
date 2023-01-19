const express = require("express");
const mongoose = require("mongoose");
const fakeDB = require("./fake-db");
const config = require("./config/dev");

const app = express();

const productRoutes = require("./routes/products");

app.use("/api/v1/products", productRoutes);

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new fakeDB();
  fakeDb.initDb();
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, function () {
  console.log("I am runnning");
});
