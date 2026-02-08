import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis." },
        { status: 400 },
      );
    }

    // Email interne
    const { error } = await resend.emails.send({
      from: "DAPI OIL SARL <onboarding@resend.dev>",
      to: ["theodorebinda@gmail.com"],
      subject: `[Contact] ${subject}`,
      replyTo: email,
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        `Téléphone: ${phone || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (!error) {
      // Accusé de réception vers l'utilisateur
      await resend.emails.send({
        from: "DAPI OIL SARL <theodorebinda@gmail.com>",
        to: [email],
        subject: "Nous avons bien reçu votre message",
        text: [
          `Bonjour ${name || ""},`,
          "",
          "Merci pour votre message. Nous revenons vers vous très vite.",
          "",
          `Sujet : ${subject}`,
          `Téléphone : ${phone || "N/A"}`,
          "",
          "Récapitulatif :",
          message,
          "",
          "— Équipe DAPI OIL SARL",
        ].join("\n"),
      });
    }

    // const { error } = await resend.emails.send({
    //   from: "DAPI OIL SARL <onboarding@resend.dev>",
    //   to: ["support@mainteliatechnologies.com", "theodorebinda@gmail.com"],
    //   subject: subject,
    //   replyTo: email,
    //   html: `
    //   <!DOCTYPE html>
    //   <html>
    //   <head>
    //       <style>
    //           .email-container {
    //               font-family: 'Arial', sans-serif;
    //               max-width: 100%;
    //               margin: 0 auto;
    //               color: #333;
    //           }
    //           .header {
    //               background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
    //               padding: 30px;
    //               text-align: center;
    //               color: white;
    //               position: relative;
    //               overflow: hidden;
    //           }
    //           .logo-corner {
    //               position: absolute;
    //               top: 15px;
    //               left: 15px;
    //               max-width: 50px;
    //               max-height: 50px;
    //           }
    //           .header-content {
    //               position: relative;
    //               z-index: 2;
    //           }
    //           .content {
    //               padding: 10px;
    //               background: #f9fafb;
    //           }
    //           .message-box {
    //               background: white;
    //               border-left: 4px solid #2563eb;
    //               padding: 15px;
    //               margin: 20px 0;
    //               box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    //           }
    //           .footer {
    //               text-align: center;
    //               padding: 15px;
    //               font-size: 12px;
    //               color: #6b7280;
    //               background: #f3f4f6;
    //           }
    //       </style>
    //   </head>
    //   <body>
    //       <div class="email-container">
    //           <div class="header">
    //               <!-- Logo dans le coin -->
    //               <img src="https://esmicom.org/images/logo.jpeg" alt="Esmicom" class="logo-corner">
                  
    //               <div class="header-content">
    //                   <h1>Nouveau Feedback Reçu</h1>
    //                   <p>ESMICOM E-Learning</p>
    //               </div>
    //           </div>
              
    //           <div class="content">
    //               <div class="message-box">
    //                   <p><strong>👤 Nom :</strong> ${name}</p>
    //                   <p><strong>✉️ Email :</strong> ${email}</p>
    //                   <p><strong>📞 Numéro de téléphone :</strong> ${phone}</p>
    //                   <p><strong>📌 Sujet :</strong> ${subject}</p>
    //               </div>
                  
    //               <h3>Message :</h3>
    //               <div class="message-box">
    //                   <p>${message}</p>
    //               </div>
    //           </div>
              
    //           <div class="footer">
    //               <p>© ${new Date().getFullYear()} ESMICOM E-Learning</p>
    //               <p>Cet email a été envoyé par un utilisateur de la plateforme Esmicom a l'equipe mainteliatechnologies, merci de y répondre par son email ou numero de telephone fourni ci-haut.</p>
    //           </div>
    //       </div>
    //   </body>
    //   </html>
    //   `,
    // });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        { error: "Échec de l'envoi, merci de réessayer." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error", err);
    return NextResponse.json(
      { error: "Erreur interne, merci de réessayer." },
      { status: 500 },
    );
  }
}
