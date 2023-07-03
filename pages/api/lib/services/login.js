import { createClient } from "contentful";
import { getUsers } from "../contentful/getUsers";

const login = async (req, res) => {
    // switch(req.method) { //this is for database.
    //     case "GET":
    //         res.status(200).json({ message: "connected as get request" });
    //         break;
    //     case "POST":
    //         dbconnect.query("SELECT * FROM users WHERE name = ? and pw = ?", [req.body.name, req.body.pw], (err, result) => {
    //             if(err) throw err;
    //             if(result.length === 0) {
    //                 res.status(200).json({ message: null });
    //             } else {
    //                 res.status(200).json({ message: result });
    //             }
    //         })
    //         break;
    //     default: 
    //         res.status(400).json({ message: "bad request" });
    //         break;
    // }
    switch(req.method) {
        case "GET":
            res.status(200).json({ message: "get method" });
            break;
        case "POST":
            try {
                const items = await getUsers();
                console.log(items);
                res.status(200).json({ message: null });
              } catch (error) {
                console.log(error);
                res.status(400).json({ message: "failed to get data" });
              }
            break;
    }
}

export default login;