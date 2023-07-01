// import { dbconnect } from "../database/dbconnect";
const contentful = require('contentful-management')
import { createClient } from "contentful";

const register = (req, res) => {
    // switch(req.method) { //this is for database.
    //     case "GET":
    //         dbconnect.query("SELECT * FROM users", (err, users) => {
    //             if(err) throw err;
    //             res.status(200).json({ message: users });
    //         })
    //         break;
    //     case "POST":
    //         dbconnect.query("INSERT into users (name, pw, regdate) values (?, ?, ?)", [req.body.name, req.body.pw, req.body.regdate], (err, result) => {
    //             if(err) throw err;
    //             res.status(200).json({ message: result });
    //         });
    //         // res.status(200).json({ message: req.body});
    //         break;
    //     default:
    //         res.status(400).json({ message: "bad request!!"});
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
            client.getEntries({ content_type: "tetrisusers" }).then(
                (resp) => {
                    entry = {
                        fields: {
                            uname: {
                                "en-US": req.body.name
                            },
                            pw: {
                                "en-US": req.body.pw
                            },
                            regdate: {
                                "en-US": req.body.regdate
                            },
                            uid: {
                                "en-US": resp.total
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
                .then((environment) => environment.createEntry('tetrisusers', entry))
                .then((entry) => {
                    entry.publish();
                    res.status(200).json({ message: 'Entry created' });
                })
                .catch((error) => {
                    console.error('Error creating entry:', error);
                    res.status(400).json({ message: 'Failed to create entry' });
                });
        }
}

export default register;