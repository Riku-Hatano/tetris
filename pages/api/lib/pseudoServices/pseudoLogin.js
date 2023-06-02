const fs = require("fs");
const path = require("path");

const pseudoLogin = (req, res) => {
    switch(req.method) {
        case "GET":
            res.status(200).json({message: "pseudoLogin: GET"});
            // fs.readFile("/var/task/api/pseudoDB/users.json", "utf-8", (err, data) => {
            //     if(err) {
            //         console.log(err);
            //         res.status(400).json({
            //             message: req.body,
            //             cwd: process.cwd(),
            //             parentDir: path.resolve(__dirname, ".."),
            //         });
            //     } else {
            //         JSON.parse(data).forEach((user) => {
            //             if(user.pw === req.body.pw && user.name === req.body.name) {
            //                 res.status(200).json({message: [user]});
            //                 return;
            //             }
            //         })
            //         res.status(200).json({message: null});
            //     }
            // })
            break;
        case "POST":
            // res.status(200).json({
            //     message: "pseudoLogin: POST",
            //     reqBody: req.body,
            //     cwd: process.cwd(),
            //     parentDir: path.resolve(__dirname, ".."),
            // });//ハンドシェイク自体はうまくいってるっぽい
            // cwd: "/var/task"
            // message: "pseudoLogin: POST"
            // parentDir: "/var/task/.next/server/pages/api/lib"
            // reqBody: {name: 'test', pw: 'test'}

            // fs.readFile("pages/api/pseudoDB/users.json", "utf-8", (err, data) => {
            const filePath = path.resolve(__dirname, "../../pseudoDB/users.json");
            fs.readFile(filePath, "utf-8", (err, data) => {
                if(err) {
                    console.log(err);
                    res.status(400).json({
                        message: req.body,
                        cwd: process.cwd(),
                        parentDir: path.resolve(__dirname, ".."),
                        pseudoDB: path.resolve(__dirname, "../../pseudoDB"),
                        dirname: path.resolve(__dirname),
                    });
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