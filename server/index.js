import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import countryRouter from "./src/routes/country";

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Babel");
});

app.get("/country", countryRouter);

app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});

// https://cloudnweb.dev/2019/07/configuring-babel-for-node-js-express-server/
