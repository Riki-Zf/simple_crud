const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello leidy");
});

//db connection
mongoose
  .connect("mongodb+srv://riki:hP1m0w2EE50A8kTo@backenddb.yg9vi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("connected");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("failed to connect");
  });
