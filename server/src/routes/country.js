import express from 'express';
import { countryController } from "../controllers/country";

const countryRouter = express.Router();

/* GET users listing. */
countryRouter.get("/country", countryController.getAllCountry);

export default countryRouter;
