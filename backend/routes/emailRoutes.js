import express from "express";
const router = express.Router();
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transport = {
  //all of the configuration for making a site send an email.

  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    //if error happened code ends here
    console.error(error);
  } else {
    //this means success
    console.log("users ready to mail myself");
  }
});

router.post("/", (req, res) => {
  //make mailable object
  const mail = {
    from: process.env.THE_EMAIL,
    to: "er.manvirsingh98@gmail.com",
    subject: req.body.subject,
    text: `
    from: ${req.body.name} 

    contact: ${req.body.email}

    message: 

    ${req.body.message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

export default router;
