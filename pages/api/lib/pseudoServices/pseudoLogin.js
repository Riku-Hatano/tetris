const fs = require("fs");

const pseudoLogin = (req, res) => {
    switch(req.method) {
        case "GET":
            res.status(200).json({message: "pseudoLogin: GET"});
            break;
        case "POST":
            // fs.readFile("pages/api/pseudoDB/users.json", "utf-8", (err, data) => {
            fs.readFile("https://tetris-riku-hatano.vercel.app/pages/api/pseudoDB/users.json", "utf-8", (err, data) => {
                if(err) {
                    console.log(err);
                    res.status(400).json({message: "failed to read file"});
                } else {
                    JSON.parse(data).forEach((user) => {
                        if(user.pw === req.body.pw && user.name === req.body.name) {
                            res.status(200).json({message: [user]});
                            return;
                        }
                    })
                    res.status(200).json({message: null});
                }
            })
            break;
    }
}

export default pseudoLogin;