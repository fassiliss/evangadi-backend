// // Promise Based Mysql
// const mysql2 = require("mysql2");    

// const dbconnection = mysql2.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     connectionLimit: 10,
//     port: process.env.PORT,
//   });
  // console.log(process.env.PASSWORD);
  // module.exports = dbconnection;

  //  module.exports = dbconnection.promise();
  const mysql2 = require("mysql2");

  // Create pool with your Railway credentials
  const dbconnection = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    connectionLimit: 10,
  });

  // ✅ Export the promise-based version
  module.exports = dbconnection;
  // module.exports = dbconnection.promise();
