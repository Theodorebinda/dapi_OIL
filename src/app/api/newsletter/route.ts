import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide ou manquant." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "DAPI OIL SARL <onboarding@resend.dev>",
      to: ["theodorebinda@gmail.com"],
      subject: "Nouvel inscrit newsletter",
      text: `Nouvelle inscription newsletter : ${email}`,
    });

    if (!error) {
      await resend.emails.send({
        from: "DAPI OIL SARL <onboarding@resend.dev>",
        to: [email],
        subject: "Inscription newsletter confirmée",
        text: [
          "Merci pour votre inscription à la newsletter DAPI OIL SARL.",
          "Nous vous tiendrons informé(e) de nos actualités et offres.",
        ].join("\n"),
      });
    }

    if (error) {
      console.error("Resend newsletter error", error);
      return NextResponse.json(
        { error: "Impossible d’enregistrer cet email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error", err);
    return NextResponse.json(
      { error: "Erreur interne, merci de réessayer." },
      { status: 500 },
    );
  }
}
