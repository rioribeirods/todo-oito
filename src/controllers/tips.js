import bd from "../config/database.js";

const tipsController = (app) => {
    
    app.get("/tips", (req, res) => {
        const tip = bd[Math.floor(Math.random()*(bd.length))]
        return res.json(tip)
    })

}

export default tipsController;