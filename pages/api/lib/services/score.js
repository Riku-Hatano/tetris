import { createClient } from "contentful";
const contentful = require("contentful-management");

const score = (req, res) => {
    const client = createClient({
        space: "jivp4q6rn93f",
        accessToken: "lX7fWPWoJdKgbnEgSCU2kSEGlEBT0H1PFqdWiuntS3s"
    })
    switch(req.method) {
        case "GET":
            break;
        case "POST":
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
                case "pickHighest": {
                    const bodyData = JSON.parse(req.body.logUser);
                    const date = new Date()
                    const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate() + 1).padStart(2, "0")}`;

                    client.getEntries({ content_type: "tetrisscores" }).then(
                        (resp) => {
                            const highest = {
                                uname: "",
                                uid: 0,
                                score: 0
                            }
                            const todayHighest = {
                                uname: "",
                                uid: 0,
                                score: 0
                            }
                            const yourHighest = {
                                score: 0
                            }
                            const returnArr = {
                                highest: highest,
                                todayHighest: todayHighest,
                                yourHighest: yourHighest
                            }

                            if(bodyData !== null) {
                                resp.items.map((scoreData) => {
                                    if(scoreData.fields.score > highest.score) {
                                        highest.score = scoreData.fields.score,
                                        highest.uid = scoreData.fields.uid
                                    }
                                    if(bodyData.uid === scoreData.fields.uid && scoreData.fields.score > yourHighest.score) {
                                        yourHighest.score = scoreData.fields.score
                                    }
                                    if(today === scoreData.fields.playdate.slice(0, 10) && scoreData.fields.score > todayHighest.score) {
                                        todayHighest.score = scoreData.fields.score,
                                        todayHighest.uid = scoreData.fields.uid
                                    }
                                })
                                return returnArr;
                            } else {
                                resp.items.map((scoreData) => {
                                    if(scoreData.fields.score > highest.score) {
                                        highest.score = scoreData.fields.score,
                                        highest.uid = scoreData.fields.uid
                                    }
                                    if(today === scoreData.fields.playdate.slice(0, 10) && scoreData.fields.score > todayHighest.score) {
                                        todayHighest.score = scoreData.fields.score,
                                        todayHighest.uid = scoreData.fields.uid
                                    }
                                })
                                returnArr.yourHighest.score = -1;
                            }
                            // res.status(200).json({ message: returnArr });
                            return returnArr;
                        },
                        (rej) => {
                            res.status(400).json({ message: rej });
                        }
                    )
                    .then((returnArr) => {
                        const client = createClient({
                            space: "jivp4q6rn93f",
                            accessToken: "lX7fWPWoJdKgbnEgSCU2kSEGlEBT0H1PFqdWiuntS3s"
                        })
                        client.getEntries({ content_type: "tetrisusers" }).then(
                            (resp) => {
                                let entry = {
                                    fields: {
                                        highestUid: returnArr.highest.uid,
                                        todayHighestUid: returnArr.todayHighest.uid
                                    }
                                }
                                let returnObj = {
                                    highest: returnArr.highest,
                                    todayHighest: returnArr.todayHighest,
                                    yourHighest: returnArr.yourHighest
                                };
                                resp.items.forEach((user) => {
                                    if(user.fields.uid === entry.fields.highestUid) {
                                        returnObj.highest.uname = user.fields.uname;
                                    }
                                    if(user.fields.uid === entry.fields.todayHighestUid) {
                                        returnObj.todayHighest.uname = user.fields.uname
                                    }
                                })
                                res.status(200).json({ message: returnObj });
                            },
                            (rejc) => {
                                res.status(400).json({ message: "failed to get data" });
                                console.log(rejc);
                            }
                    )})
                }
            }
            break;
    }
}

export default score;