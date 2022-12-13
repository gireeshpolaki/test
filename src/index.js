const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const { apiRouter } = require("./routes/index");

const app = express();
const env = process.env.NODE_ENV;

if(env !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'src/public')));

app.use("/api", apiRouter);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  throw err;
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err);
});

app.listen(PORT, () => {
    console.log('Application has started succesfully on PORT', PORT)
})

process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection', err)
})

process.on('uncaughtException', (err) => {
    console.log('uncaughtException', err)
})

module.exports = app;
