import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmail } from "@/lib/email/templates";

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
      from: "DAPI OIL SARL <system@dapioil.com>",
      to: ["contact@dapioil.com"],
      subject: "Nouvel inscrit newsletter",
      text: `Nouvelle inscription newsletter : ${email}`,
      html: buildContactEmail({
        title: "Nouvel inscrit à la newsletter",
        intro: "Une nouvelle adresse vient de s’abonner à la newsletter DAPI OIL.",
        rows: [{ label: "Email", value: email }],
        footerNote:
          "Merci de vérifier la délivrabilité et d’ajouter cette adresse à vos listes.",
      }),
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
        html: buildContactEmail({
          title: "Bienvenue dans la newsletter DAPI OIL",
          intro:
            "Merci pour votre inscription. Vous recevrez bientôt nos actualités, offres et informations logistiques.",
          rows: [{ label: "Email inscrit", value: email }],
          footerNote:
            "Si vous n’êtes pas à l’origine de cette inscription, ignorez simplement ce message.",
        }),
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
