import { dbconnect } from "../database/dbconnect";
import { createClient } from "contentful";
const contentful = require("contentful-management");

const score = (req, res) => {
    // switch(req.method) {
    //     case "GET":
    //         dbconnect.query("SELECT * FROM scores", (err, scores) => {
    //             if(err) throw err;
    //             res.status(200).json({message: scores});
    //         })
    //         break;
    //     case "POST":
    //         switch(req.body.purpose) {
    //             case "send":
    //                 dbconnect.query("INSERT INTO scores (uid, score, gamemode, playdate) VALUES(?, ?, ?, ?)", [req.body.uid, req.body.score, req.body.gamemode, req.body.playdate], (err, result) => {
    //                     if(err) throw err;
    //                     res.status(200).json({message: result});
    //                 })
    //                 break;
    //             case "pick":
    //                 dbconnect.query("SELECT * FROM scores WHERE uid = ?", [req.body.uid], (err, scores) => {
    //                     if(err) throw err;
    //                     res.status(200).json({message: scores});
    //                 })
    //                 break;
    //             default:
    //                 res.status(400).json({message: "illegal purpose flag"});
    //         }
    //         break;
    //     default:
    //         res.status(400).json({message: "bad request!"})
    // }
    switch(req.method) {
        case "GET":
            res.status(200).json({ message: "get request" });
            break;
        case "POST":
            const client = createClient({
                space: "jivp4q6rn93f",
                accessToken: "lX7fWPWoJdKgbnEgSCU2kSEGlEBT0H1PFqdWiuntS3s"
            })
            let entry;
            
            switch(req.body.purpose) {
                case "send":
                    client.getEntries({ content_type: "tetrisscores" }).then(
                        (resp) => {
                            entry = {
                                fields: {
                                    sid: {
                                        "en-US": resp.total
                                    },
                                    uid: {
                                        "en-US": req.body.uid
                                    },
                                    score: {
                                        "en-US": req.body.score
                                    },
                                    gamemode: {
                                        "en-US": req.body.gamemode
                                    },
                                    playdate: {
                                        "en-US": req.body.playdate
                                    }
                                }
                            }
                        },
                        (rejc) => {
                            console.log(rejc);
                        }
                    )
                    const managementClient = contentful.createClient({
                        accessToken: "CFPAT-1TieUWuOMg6lso2jVKRKaaTnBwxd6-yuVti2-iqRQho"
                    });
                    managementClient.getSpace("jivp4q6rn93f")
                        .then((space) => space.getEnvironment('master'))
                        .then((environment) => environment.createEntry('tetrisscores', entry))
                        .then((entry) => {
                            entry.publish();
                            res.status(200).json({ message: 'Entry created' });
                        })
                        .catch((error) => {
                            console.error('Error creating entry:', error);
                            res.status(400).json({ message: 'Failed to create entry' });
                        });
                    break;
                case "pick":
                    client.getEntries({ content_type: "tetrisscores" }).then(
                        (resp) => {
                            const returnScoreArr = [];
                            resp.items.map((score) => {
                                if(score.fields.uid === req.body.uid) {
                                    returnScoreArr.push(score.fields);
                                }
                            })
                            res.status(200).json({ message: returnScoreArr});
                        }
                    )
                    break;
            }
            break;
    }
}

export default score;