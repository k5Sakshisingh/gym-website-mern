// import nodeMailer from "nodemailer";

// export const sendEmail = async (options) => {
//     const transporter = nodeMailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       service: process.env.SMTP_SERVICE,
//       auth: {
//         user: process.env.SMTP_MAIL,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });
  
//     const mailOptions = {
//       from: process.env.SMTP_MAIL,
//       to: options.email,
//       subject: options.subject,
//       text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
//     };
//     await transporter.sendMail(mailOptions);
//   };

// import nodemailer from "nodemailer";

// export const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     service: process.env.SMTP_SERVICE, // Gmail is recognized by nodemailer
//     port: process.env.SMTP_PORT, // 465 for SSL (Gmail default)
//     secure: true, // Use SSL connection for port 465
//     auth: {
//       user: process.env.SMTP_MAIL, // Your email
//       pass: process.env.SMTP_PASSWORD, // Your email password or app password
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMTP_MAIL, // Sender's email address
//     to: options.email, // Recipient's email address (your email, e.g. rasakshika@gmail.com)
//     subject: options.subject, // Subject of the email
//     text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`, // Email content
//   };

//   await transporter.sendMail(mailOptions);
// };

import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE, // Gmail is recognized by nodemailer
    port: process.env.SMTP_PORT, // 465 for SSL (Gmail default)
    secure: true, // Use SSL connection for port 465
    auth: {
      user: process.env.SMTP_MAIL, // Your email
      pass: process.env.SMTP_PASSWORD, // Your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL, // Sender's email address
    to: options.email, // Recipient's email address (your email, e.g. rasakshika@gmail.com)
    subject: options.subject, // Subject of the email
    text: `${options.message} \n\n
           Name: ${options.name} \n
           Contact Number: ${options.contactNumber} \n
           Email of User: ${options.userEmail}`, // Email content including name and contact number
  };

  await transporter.sendMail(mailOptions);
};

