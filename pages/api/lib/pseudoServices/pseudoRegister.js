const fs = require('fs');
const path = require("path");
const filePath = path.resolve(__dirname, "aaa.txt");

const pseudoRegister = (req, res) => {
    switch(req.method) {
        case "GET":
            fs.readFile("https://tetris-riku-hatano.vercel.app/pages/api/pseudoDB/users.json", "utf-8", (err, data) => {
            // fs.readFile("pages/api/pseudoDB/users.json", "utf-8", (err, data) => {
                if(err) {
                    console.log(err);
                    return;
                }
                res.status(200).json({message: data});
            })
            break;
        case "POST":
            let prevData = null;
            fs.readFile("https://tetris-riku-hatano.vercel.app/pages/api/pseudoDB/users.json", "utf-8", (err, data) => {
            // fs.readFile("pages/api/pseudoDB/users.json", "utf-8", (err, data) => {
                if(err) {
                    console.log(err);
                    return;
                } else {
                    prevData = JSON.parse(data);
                    const newOneData = req.body;
                    newOneData.uid = prevData.length + 1;
                    prevData.push(newOneData);

                    fs.writeFile('https://tetris-riku-hatano.vercel.app/pages/api/pseudoDB/users.json', JSON.stringify(prevData), {flag: "w"}, (err) => {
                    // fs.writeFile('pages/api/pseudoDB/users.json', JSON.stringify(prevData), {flag: "w"}, (err) => {
                        if (err) {
                            console.error(err);
                            res.status(400).json({message: "failed to add user data"});
                            return;
                        }
                        res.status(200).json({message: "successfully added data"});
                    });
                }
            })
            break;

    }
}

export default pseudoRegister;