// const publicDir = require("path").join(__dirname, "/files");
const express = require("express");
// const consola = require("consola");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
// const cookieParser = require("cookie-parser");
// require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes/router");
const app = express();

app.use(helmet());
app.disable("x-powered-by");
// const host = process.env.HOST || "127.0.0.1";
// const port = process.env.PORT || 4000;
app.use(morgan("dev"));
app.use(cors());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(publicDir));

app.use("/api/", routes);

//  Connect to mongoDB.
mongoose.connect(process.env.mongo, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// const db = mongoose.connection;
// db.on(
//   "error",
//   console.error.bind(console, "Oops! couldn't connect to MongoDB.")
// );
// db.once("open", function() {
//   console.log("Viola! Connected to MongoDB.");
// });

// Listen the server
module.exports = app;
// app.listen(port, host, () =>
//   consola.ready({
//     message: `Server listening on http://${host}:${port}`,
//     badge: true
//   })
// );
