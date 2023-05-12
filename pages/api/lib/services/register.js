import { dbconnect } from "../database/dbconnect";

const register = (req, res) => {
    switch(req.method) {
        case "GET":
            dbconnect.query("SELECT * FROM users", (err, users) => {
                if(err) throw err;
                res.status(200).json({ message: users });
            })
            break;
        case "POST":
            dbconnect.query("INSERT into users (name, pw, regdate) values (?, ?, ?)", [req.body.name, req.body.pw, req.body.regdate], (err, result) => {
                if(err) throw err;
                res.status(200).json({ message: result });
            });
            // res.status(200).json({ message: req.body});
            break;
        default:
            res.status(400).json({ message: "bad request!!"});
    }
}

export default register;