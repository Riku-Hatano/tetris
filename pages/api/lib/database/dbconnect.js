const mysql = require("mysql");
import { dbconfig } from "./dbconfig";

export const dbconnect = mysql.createConnection(dbconfig);
dbconnect.connect((err) => {
  if (err) throw err;
});
