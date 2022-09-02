// REQUIRE MODEL
import { listModel } from "../../models/country";

export const countryController = {
    getAllCountry: (req, res) => {
        res.status(200).send({ data: listModel });
    }
};
