const fs = require("fs");

const pseudoScore = (req, res) => {
    switch(req.method) {
        case "GET":
            break;
        case "POST":
            switch(req.body.purpose) {
                case "send":
                    let prevScores = null;
                    fs.readFile("https://tetris-riku-hatano.vercel.app/api/pseudoDB/scores.json", "utf-8", (err, data) => {
                    // fs.readFile("pages/api/pseudoDB/scores.json", "utf-8", (err, data) => {
                        if(err) {
                            console.log(err);
                            res.status(400).json({message: "failed to get socre data"});
                        } else {
                            prevScores = JSON.parse(data);
                            const newOneScore = req.body;
                            delete newOneScore.purpose;
                            newOneScore.sid = prevScores.length;
                            prevScores.push(newOneScore);
                            
                            fs.writeFile('https://tetris-riku-hatano.vercel.app/api/pseudoDB/scores.json',JSON.stringify(prevScores), {flag: "w"}, (err) => {
                            // fs.writeFile('pages/api/pseudoDB/scores.json',JSON.stringify(prevScores), {flag: "w"}, (err) => {
                                if(err) {
                                    console.log(err);
                                    res.status(400).json({message: "failed to update json file"});
                                } else {
                                    res.status(200).json({message: "update json file successfully!"});
                                }
                            })
                        }
                    })
                    break;
                case "pick":
                    fs.readFile("https://tetris-riku-hatano.vercel.app/pages/api/pseudoDB/scores.json", "utf-8", (err, data) => {
                    // fs.readFile("pages/api/pseudoDB/scores.json", "utf-8", (err, data) => {
                        if(err) {
                            console.log(err);
                            res.status(400).json({message: err});
                        } else {
                            const returnScores = [];
                            JSON.parse(data).forEach((score) => {
                                if(score.uid === req.body.uid) {
                                    returnScores.push(score);
                                }
                            })
                            res.status(200).json({message: returnScores});
                        }
                    })
                    break;
            }
            break;
    }
}

export default pseudoScore;