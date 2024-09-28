import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST"],
      credentials: true,
    })
  );

app.use(express.json());//USE FOR DATA PASS IN JSON FORMATE
app.use(express.urlencoded({ extended: true }));// USE FOR DATA VERIFICATION TYPE(INT, BOOLEN...)



router.post("/send/mail", async (req, res, next) => {
    const { name, email, message, contactNumber } = req.body;
    if (!name || !email || !message) {
      return next(
        res.status(400).json({
          success: false,
          message: "Please provide all details",
        })
      );
    }
    try {
      await sendEmail({
        email: "sakshisingh20052002@gmail.com",
        subject: "GYM WEBSITE CONTACT",
        name,           // Send name to the email function
        contactNumber,  // Send contact number to the email function
        message,
        userEmail: email,
      });
      res.status(200).json({
        success: true,
        message: "Message Send Successfully. we will contact you as soon as",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: " Internal Server Error",
      });
    }
  });


app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});