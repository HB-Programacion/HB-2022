const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
   service: "Gmail",
   auth: {
      user: "juergapumpum@gmail.com",
      pass: "hdwzlmofoqvovlut",
   },
});

exports.emailContact = functions.firestore
   .document("userContact/{id}")
   .onCreate(async (snap) => {
      const getData = snap.data();
      const email = await getData.email;
      return contactEmail(email);
   });

const contactEmail = (email) => {
   return transport
      .sendMail({
            from: "PUM PUM <juergapumpum@gmail.com>",
            bcc: "homer@henribarrett.com",
            to: email,
            subject: "¡Ganaste un kit para la juerga PUM PUM 6.0%! 🥳🍺",
            html: `
            <!DOCTYPE html>
               <head>
                  <title>Tres Cruces - Pum Pum</title>
                  <meta content="IE=edge" http-equiv="X-UA-Compatible">
                  <meta content="width=device-width, initial-scale=1.0 " name="viewport">
                  <meta content="telephone=no" name="format-detection">
                  <meta content="light dark" name="color-scheme">
                  <meta content="light dark" name="supported-color-schemes">
                  <style>
                        :root {
                           color-scheme: light dark;
                           supported-color-schemes: light dark
                        }
                  </style>
                  <style>
                        html {
                           background-color: #FFFFFF;
                        }
                  </style>
               </head>
               <body bgcolor="#ffffff"
                  style="-ms-text-size-adjust:100%; -webkit-font-smoothing:antialiased; -webkit-text-size-adjust:100%; margin:0; padding:0;background-color: #FFFFFF;">
                  <!--BODY SECTION-->
                  <table align="center" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff"
                        style="border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0;" width="100%">
                        <tr>
                           <td align="center" style="border-collapse:collapse; mso-line-height-rule:exactly" valign="top">
                              <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"
                                    style="background-image:url(https://i.ibb.co/RPxTTnG/registro.png);background-repeat:no-repeat; background-position: center center;border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; width:600px;border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; width:600px; table-layout:fixed; border:1px solid #007f2c15"
                                    width="600">
                                    <!--IMAGE-->
                                    <tr style="background-color: #FFFFFF;">
                                       <td align="center"
                                          style="border-collapse:collapse;background-color: #FFFFFF; mso-line-height-rule:exactly; text-decoration:none">
                                          <img alt="Amstel" border="0" src="https://firebasestorage.googleapis.com/v0/b/pumpum-promocion.appspot.com/o/mail.png?alt=media&token=f7ebf1d9-c8c1-4397-8753-4d788cd102fe"
                                                style="border:0; outline:none; display:block; font-family:Arial; font-size:15px; line-height:17px; color:#007F2D; max-width:600px"
                                                width="600">
                                       </td>
                                    </tr>
                                    <tr style="background-color: #FFFFFF;">
                                       <td align="center"
                                          style="border-collapse:collapse;background-color: #FFFFFF; mso-line-height-rule:exactly; text-decoration:none">
                                       </td>
                                    </tr>
                              </table>
                              <!--BODY SECTION-->
                              <div style="display:none">
                                    Disfruta la próxima juerga bien lookeado 😎
                              </div>
                           </td>
                        </tr>
                  </table>
            </body>
            </html>
               `,
      })
      .then((r) => r)
      .catch((e) => e);
};