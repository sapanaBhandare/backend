const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const productRouter =require("./routes/productRoutes")

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

const db = "mongodb://0.0.0.0:27017/customer";
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log("Error connecting to DB");
    } else {
      console.log("successfully connected to DB");
    }
  }
);

app.use(express.json())
const port = 5000;
app.listen(port, () => {
  console.log(`server runing on port: ${port}`);
});

app.use((req,res,next)=>{
console.log("HTTP Method : "+req.method+", URL : "+req.url);
next();

})

app.use("/users", userRouter);
app.use("/product", productRouter);
