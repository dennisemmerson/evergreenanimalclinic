var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'dennisemmerson@outlook.com',
        pass: 'mtmc0303'
    }
});





export default async (req, res) => {
    const { name, petName,  phone, email, reason } = req.body
    console.log(req.body);

    // Check if fields are all filled
    if (name === "" || petName === "" || phone === "" || email === "" || reason === "") {
        res.status(403).send("")
        return
    }


    var mailOptions = {
        from: 'dennisemmerson@outlook.com',
        to: 'dennisemmerson@outlook.com',
        subject: 'Request for Appointment',
        html: `<p><b>Name of Owner: ${name}</b></p> 
        <p><b> Pet Name: ${petName}</b> </p>
        <p><b> Phone Number: ${phone}</b> </p>
        <p><b> Email address: ${email}</b> </p>
        <p><b> Reason for Appointment Request: ${reason}</b> </p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}


// import nodemailer from "nodemailer"

// // const emailPass = "yourPassword"

// const transporter = nodemailer.createTransport({
//     service: 'outlook',
//     auth: {
//       user: 'dennisemmerson@outlook.com',
//       pass: 'mtmc0303'
//     }
// })
// //[1]

// export default async (req, res) => {
//     const { senderMail, name, content, recipientMail } = req.body
// //[2]

//     // Check if fields are all filled
//     if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
//         res.status(403).send("")
//         return
//     }
// //[3]

//     const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
//     res.send(mailerRes)
// //[4]
// }

// const mailer = ({ senderMail, name, text, recipientMail }) => {
//     const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
//     const message = {
//         from,
//         to: `${recipientMail}`,
//         subject: `New message from ${from}`,
//         text,
//         replyTo: from
//     }
// //[5]

//     return new Promise((resolve, reject) => {
//         transporter.sendMail(message, (error, info) =>
//             error ? reject(error) : resolve(info)
//         )
//     })
// //[6]
// }