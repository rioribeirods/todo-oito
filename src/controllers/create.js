import createM  from "../model/create.js";
import bd from "../config/database.js";

const createController = (app) => {

    app.post("/create", (req, res) => {
        const { tip } = req.body

        const tipModel = new createM(tip)

        bd.push(tipModel)

        res.send(bd)
    })

}

export default createController;