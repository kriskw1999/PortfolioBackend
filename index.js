const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");

const PORT = 8080;

var corsOptions = {
  origin: 'https://www.krzysztof-witkowski.com'
}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: "kriskw1999@gmail.com",
      pass: "Witkowski.99",
      clientId: "978223524814-7o4rbq1sslt7scnlahgp8fghhb67r0oa.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04TdU0p0X21fKCgYIARAAGAQSNwF-L9IreQrhrYzQ-PqUxgb-CmgGQ4GgOkR4bdtP7POGTVbCZ0GdeX2BdYeuUeZlRN9bfe4e_cI"
    }
  });

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/sendcontact/:name/:mail/:message/", cors(corsOptions) , function (req, res) {

    let mailOptions = {
        from: "kriskw1999@gmail.com",
        to: "kriskw1999@gmail.com",
        subject: `Portfolio contact from ${req.params.mail}`,
        text: `${req.params.message}`
      };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
          res.json({result: err});
        } else {
          console.log("Email sent successfully");
          res.json({result: "success"});
        }
    });
    
})

// start the server listening for requests
app.listen(process.env.PORT || PORT, 
	() => console.log("Server is running..."));
