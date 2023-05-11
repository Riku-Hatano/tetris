import { dbconnect } from "../database/dbconnect";

const score = (req, res) => {
    switch(req.method) {
        case "GET":
            dbconnect.query("SELECT * FROM scores", (err, scores) => {
                if(err) throw err;
                res.status(200).json({message: scores});
            })
            break;
        case "POST":
            switch(req.body.purpose) {
                case "send":
                    dbconnect.query("INSERT INTO scores (uid, score, gamemode, playdate) VALUES(?, ?, ?, ?)", [req.body.uid, req.body.score, req.body.gamemode, req.body.playdate], (err, result) => {
                        if(err) throw err;
                        res.status(200).json({message: result});
                    })
                    break;
                case "pick":
                    dbconnect.query("SELECT * FROM scores WHERE uid = ?", [req.body.uid], (err, scores) => {
                        if(err) throw err;
                        res.status(200).json({message: scores});
                    })
                    break;
                default:
                    res.status(400).json({message: "illegal purpose flag"});
            }
            break;
        default:
            res.status(400).json({message: "bad request!"})
    }
}

export default score;