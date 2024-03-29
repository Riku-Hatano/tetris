import { createClient } from "contentful";

const login = (req, res) => {
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
  switch (req.method) {
    case "GET":
      res.status(200).json({ message: "get method" });
      break;
    case "POST":
      const client = createClient({
        space: "jivp4q6rn93f",
        accessToken: "lX7fWPWoJdKgbnEgSCU2kSEGlEBT0H1PFqdWiuntS3s",
      });
      let entry;
      client.getEntries({ content_type: "tetrisusers" }).then(
        (resp) => {
          entry = {
            fields: {
              uname: {
                "en-US": req.body.uname,
              },
              pw: {
                "en-US": req.body.pw,
              },
              regdate: {
                "en-US": req.body.regdate,
              },
              uid: {
                "en-US": resp.total,
              },
            },
          };
          let returnObj = null;
          resp.items.forEach((user) => {
            if (
              user.fields.uname === req.body.uname &&
              user.fields.pw === req.body.pw
            ) {
              returnObj = user.fields;
            }
          });
          if (returnObj === null) {
            res.status(200).json({ message: null });
          } else {
            res.status(200).json({ message: returnObj });
          }
        },
        (rejc) => {
          res.status(400).json({ message: "failed to get data" });
          console.log(rejc);
        },
      );
      break;
  }
};

export default login;
