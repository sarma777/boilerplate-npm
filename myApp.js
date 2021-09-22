var express = require('express');
var app = express();
console.log("Hello World");

//serve an HTML file
app.get("/", (req, res, ) => { res.sendFile(__dirname + "/views/index.html") });

//serve static assets
app.use("/public", express.static(__dirname + "/public"));

//use of th .env file & Implement a root-level request logger middleware
app.get("/json", (req, res) => {
    let message = (process.env.MESSAGE_STYLE === "uppercase") ? "HELLO JSON" : "Hello json";
    res.json({
      message: message
   });
   var string = req.method + " " + req.path + " - " + req.ip;
   console.log(string);
});

//chain middleware to create a time server
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
},
(req, res) =>{
res.send({time: req.time});
}
);
   //next();
   // console.log(message);
//    console.log(String(process.env.MESSAGE_STYLE));
    // if (process.env.MESSAGE_STYLE === "uppercase") {
    //     res.json({
    //         message: "HELLO JSON"
    //     });
    // } else {
    //     res.json({
    //         message: "Hello json"
    //     });
    // }
    // let response = "Hello World".toUpperCase();
    // if (process.env.VAR_NAME === "allCaps") {
    //     response = "Hello World".toUpperCase()
    //   } else {
    //     response = "Hello World"
    //   }





































module.exports = app;
