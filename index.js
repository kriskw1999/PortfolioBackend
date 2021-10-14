const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = 8080;

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
app.get("/:name/:mail/:message/", function (req, res) {

    let mailOptions = {
        from: req.params.mail,
        to: "kriskw1999@gmail.com",
        subject: "Portfolio contact",
        text: `${req.params.message}`
      };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
    });
    res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || PORT, 
	() => console.log("Server is running..."));
