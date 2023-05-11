import { dbconnect } from "../database/dbconnect";

const login = (req, res) => {
    switch(req.method) {
        case "GET":
            res.status(200).json({ message: "connected as get request" });
            break;
        case "POST":
            dbconnect.query("SELECT * FROM users WHERE name = ? and pw = ?", [req.body.name, req.body.pw], (err, result) => {
                if(err) throw err;
                if(result.length === 0) {
                    res.status(200).json({ message: null });
                } else {
                    res.status(200).json({ message: result });
                }
            })
            break;
        default: 
            res.status(400).json({ message: "bad request" });
            break;
    }
}

export default login;