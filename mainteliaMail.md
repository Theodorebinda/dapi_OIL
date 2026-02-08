# Guide Complet d'Implémentation des Emails avec Resend

## Table des matières

1. [Introduction](#introduction)
2. [Installation et Configuration](#installation-et-configuration)
3. [Structure de l'API Route](#structure-de-lapi-route)
4. [Configuration de l'Environnement](#configuration-de-lenvironnement)
5. [Template HTML des Emails](#template-html-des-emails)
6. [Implémentation Frontend](#implémentation-frontend)
7. [Exemples Complets](#exemples-complets)
8. [Bonnes Pratiques](#bonnes-pratiques)
9. [Dépannage](#dépannage)

---

## Introduction

Ce guide explique comment implémenter un système d'envoi d'emails avec **Resend** dans une application Next.js. Resend est un service moderne d'envoi d'emails transactionnels qui offre une API simple et fiable.

### Avantages de Resend

- ✅ API simple et intuitive
- ✅ Support HTML/CSS pour les emails
- ✅ Suivi des emails (ouverture, clics)
- ✅ Intégration facile avec Next.js
- ✅ Plan gratuit généreux (100 emails/jour)

---

## Installation et Configuration

### Étape 1 : Installation du package

```bash
npm install resend
# ou
yarn add resend
# ou
pnpm add resend
```

### Étape 2 : Création d'un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit
3. Accédez à votre dashboard
4. Générez une clé API dans la section "API Keys"

### Étape 3 : Configuration du domaine (Optionnel mais recommandé)

Pour la production, vous devez vérifier votre domaine :
1. Allez dans "Domains" dans votre dashboard Resend
2. Ajoutez votre domaine (ex: `mainteliatechnologies.com`)
3. Configurez les enregistrements DNS fournis
4. Une fois vérifié, vous pourrez utiliser `noreply@votredomaine.com` comme adresse `from`

**Note** : Pour le développement, vous pouvez utiliser `onboarding@resend.dev` (fourni par défaut).

---

## Configuration de l'Environnement

### Fichier `.env.local`

Créez ou modifiez votre fichier `.env.local` à la racine de votre projet :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**⚠️ Important** : 
- Ne commitez JAMAIS ce fichier dans Git
- Ajoutez `.env.local` à votre `.gitignore`
- Utilisez des variables d'environnement différentes pour le développement et la production

### Vérification de la configuration

Assurez-vous que votre fichier `.gitignore` contient :

```
.env.local
.env*.local
```

---

## Structure de l'API Route

### Création du fichier API Route

Dans Next.js (App Router), créez le fichier suivant :

**Chemin** : `src/app/api/contact/route.ts`

### Code complet de l'API Route

```typescript
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Récupération des données du formulaire
    const { name, email, phone, subject, message } = await request.json();

    // Validation basique des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Remplacez par votre domaine vérifié en production
      to: ["support@mainteliatechnologies.com", "theodorebinda@gmail.com"], // Destinataires
      subject: subject,
      html: generateEmailTemplate(name, email, phone, subject, message),
    });

    // Gestion des erreurs Resend
    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Échec de l'envoi via Resend" },
        { status: 500 }
      );
    }

    // Succès
    console.log("Email envoyé avec succès :", data);
    return NextResponse.json({ 
      success: true,
      messageId: data?.id 
    });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

// Fonction pour générer le template HTML de l'email
function generateEmailTemplate(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            .email-container {
                font-family: 'Arial', sans-serif;
                max-width: 600px;
                margin: 0 auto;
                color: #333;
            }
            .header {
                background: linear-gradient(135deg, #2563eb 0%, #dc2626 100%);
                padding: 30px;
                text-align: center;
                color: white;
                position: relative;
                overflow: hidden;
            }
            .logo-corner {
                position: absolute;
                top: 15px;
                left: 15px;
                max-width: 50px;
                max-height: 50px;
            }
            .header-content {
                position: relative;
                z-index: 2;
            }
            .content {
                padding: 20px;
                background: #f9fafb;
            }
            .message-box {
                background: white;
                border-left: 4px solid #2563eb;
                padding: 15px;
                margin: 20px 0;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            .footer {
                text-align: center;
                padding: 15px;
                font-size: 12px;
                color: #6b7280;
                background: #f3f4f6;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <img src="https://esmicom.org/images/logo.jpeg" alt="Logo" class="logo-corner">
                <div class="header-content">
                    <h1>Nouveau Feedback Reçu</h1>
                    <p>ESMICOM E-Learning</p>
                </div>
            </div>
            
            <div class="content">
                <div class="message-box">
                    <p><strong>👤 Nom :</strong> ${escapeHtml(name)}</p>
                    <p><strong>✉️ Email :</strong> ${escapeHtml(email)}</p>
                    <p><strong>📞 Numéro de téléphone :</strong> ${escapeHtml(phone || 'Non fourni')}</p>
                    <p><strong>📌 Sujet :</strong> ${escapeHtml(subject)}</p>
                </div>
                
                <h3>Message :</h3>
                <div class="message-box">
                    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
                </div>
            </div>
            
            <div class="footer">
                <p>© ${new Date().getFullYear()} ESMICOM E-Learning</p>
                <p>Cet email a été envoyé par un utilisateur de la plateforme Esmicom à l'équipe mainteliatechnologies, merci de répondre par son email ou numéro de téléphone fourni ci-haut.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

// Fonction utilitaire pour échapper les caractères HTML (sécurité)
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
```

### Points importants de l'API Route

1. **Initialisation de Resend** : Une seule instance partagée pour toutes les requêtes
2. **Validation des données** : Vérifiez toujours les données avant l'envoi
3. **Gestion d'erreurs** : Capturez et gérez les erreurs Resend et serveur
4. **Échappement HTML** : Protégez contre les attaques XSS
5. **Réponses JSON** : Retournez des réponses structurées pour le frontend

---

## Template HTML des Emails

### Structure recommandée

Les emails HTML doivent suivre cette structure :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Styles inline recommandés pour la compatibilité email */
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <!-- Content -->
        <!-- Footer -->
    </div>
</body>
</html>
```

### Bonnes pratiques pour les templates email

1. **Styles inline** : Utilisez des styles inline plutôt que des classes CSS externes
2. **Largeur fixe** : Limitez la largeur à 600px maximum
3. **Images** : Utilisez des URLs absolues pour les images
4. **Responsive** : Ajoutez des media queries pour mobile
5. **Fallback** : Prévoyez un fallback pour les clients email qui ne supportent pas HTML

### Exemple de template personnalisable

```typescript
interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  logoUrl?: string;
  companyName?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

function generateCustomEmailTemplate(props: EmailTemplateProps): string {
  const {
    name,
    email,
    phone,
    subject,
    message,
    logoUrl = "https://example.com/logo.png",
    companyName = "Votre Entreprise",
    primaryColor = "#2563eb",
    secondaryColor = "#dc2626"
  } = props;

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            .email-container {
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: 0 auto;
            }
            .header {
                background: linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%);
                padding: 30px;
                text-align: center;
                color: white;
            }
            /* ... autres styles ... */
        </style>
    </head>
    <body>
        <!-- Votre template ici -->
    </body>
    </html>
  `;
}
```

---

## Implémentation Frontend

### Composant React pour le formulaire de contact

**Chemin** : `src/components/contact-form/contact-form.tsx`

```typescript
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Erreur HTTP! Statut: ${response.status}`);
      }

      // Succès
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Optionnel : Afficher une notification
      // toast.success("Message envoyé avec succès !");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envoyez-nous un message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom complet"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+243 894 594 411"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Sujet *</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="En quoi pouvons-nous vous aider ?"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre demande en détails..."
              rows={5}
              required
              className="resize-none"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
              Message envoyé avec succès ! Nous vous répondrons bientôt.
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer le message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

### Hook personnalisé pour l'envoi d'emails (Optionnel)

```typescript
// src/hooks/use-contact-form.ts
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setSuccess(true);
      resetForm();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return {
    formData,
    isLoading,
    error,
    success,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
```

---

## Exemples Complets

### Exemple 1 : Email de confirmation

```typescript
// src/app/api/contact/confirm/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Confirmation de réception",
      html: `
        <h1>Bonjour ${name},</h1>
        <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
        <p>Cordialement,<br>L'équipe ESMICOM</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
```

### Exemple 2 : Email avec pièce jointe

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Note: Pour les pièces jointes, vous devez convertir le fichier en base64
const { data, error } = await resend.emails.send({
  from: "onboarding@resend.dev",
  to: ["recipient@example.com"],
  subject: "Email avec pièce jointe",
  html: "<p>Voir la pièce jointe</p>",
  attachments: [
    {
      filename: "document.pdf",
      content: Buffer.from(fileContent).toString("base64"),
    },
  ],
});
```

### Exemple 3 : Email avec variables dynamiques

```typescript
function generateEmailWithVariables(userName: string, orderNumber: string) {
  return `
    <!DOCTYPE html>
    <html>
    <body>
      <h1>Bonjour ${escapeHtml(userName)},</h1>
      <p>Votre commande #${escapeHtml(orderNumber)} a été confirmée.</p>
      <p>Merci pour votre confiance !</p>
    </body>
    </html>
  `;
}
```

---

## Bonnes Pratiques

### 1. Sécurité

- ✅ **Toujours échapper le HTML** : Utilisez `escapeHtml()` pour éviter les attaques XSS
- ✅ **Valider les données** : Vérifiez les champs requis avant l'envoi
- ✅ **Rate limiting** : Implémentez une limitation de taux pour éviter le spam
- ✅ **Protection CSRF** : Utilisez des tokens CSRF pour les formulaires

### 2. Performance

- ✅ **Réutiliser l'instance Resend** : Créez une seule instance partagée
- ✅ **Templates réutilisables** : Créez des fonctions pour générer les templates
- ✅ **Cache des templates** : Mettez en cache les templates statiques si possible

### 3. Gestion d'erreurs

```typescript
// Exemple de gestion d'erreurs robuste
try {
  const { data, error } = await resend.emails.send({...});
  
  if (error) {
    // Log l'erreur pour le debugging
    console.error("Erreur Resend:", error);
    
    // Retournez une erreur utilisateur-friendly
    return NextResponse.json(
      { error: "Impossible d'envoyer l'email. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
  
  // Succès
  return NextResponse.json({ success: true, messageId: data?.id });
} catch (error) {
  // Erreur inattendue
  console.error("Erreur inattendue:", error);
  return NextResponse.json(
    { error: "Une erreur est survenue. Veuillez contacter le support." },
    { status: 500 }
  );
}
```

### 4. Rate Limiting (Recommandé)

```typescript
// src/app/api/contact/route.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 emails par heure
});

export async function POST(request: Request) {
  // Récupérer l'IP du client
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  
  // Vérifier le rate limit
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return NextResponse.json(
      { error: "Trop de requêtes. Veuillez réessayer plus tard." },
      { status: 429 }
    );
  }
  
  // Continuer avec l'envoi de l'email...
}
```

### 5. Validation des données

```typescript
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation avec Zod
    const validatedData = contactSchema.parse(body);
    
    // Continuer avec l'envoi...
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    // Autres erreurs...
  }
}
```

---

## Dépannage

### Problème 1 : "Invalid API Key"

**Solution** :
- Vérifiez que `RESEND_API_KEY` est bien défini dans `.env.local`
- Redémarrez votre serveur de développement après avoir ajouté la variable
- Vérifiez que la clé API est correcte dans votre dashboard Resend

### Problème 2 : "Domain not verified"

**Solution** :
- En développement, utilisez `onboarding@resend.dev`
- En production, vérifiez votre domaine dans le dashboard Resend
- Configurez correctement les enregistrements DNS

### Problème 3 : Les emails ne sont pas reçus

**Vérifications** :
1. Vérifiez les logs de la console pour les erreurs
2. Vérifiez le dossier spam du destinataire
3. Testez avec une adresse email différente
4. Vérifiez les limites de votre plan Resend

### Problème 4 : Erreur CORS

**Solution** :
- Les API Routes Next.js n'ont pas de problème CORS par défaut
- Si vous utilisez un domaine externe, configurez les headers CORS appropriés

### Problème 5 : Le template HTML ne s'affiche pas correctement

**Solution** :
- Utilisez des styles inline plutôt que des classes CSS
- Testez avec différents clients email (Gmail, Outlook, etc.)
- Utilisez des outils comme [Litmus](https://litmus.com) ou [Email on Acid](https://www.emailonacid.com)

---

## Ressources Utiles

- [Documentation officielle Resend](https://resend.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Guide des emails HTML](https://www.campaignmonitor.com/dev-resources/guides/coding/)
- [Test de compatibilité email](https://www.caniemail.com/)

---

## Conclusion

Ce guide vous a fourni toutes les informations nécessaires pour implémenter un système d'envoi d'emails avec Resend dans votre projet Next.js. N'hésitez pas à personnaliser les templates et à adapter le code selon vos besoins spécifiques.

Pour toute question ou problème, consultez la documentation officielle de Resend ou contactez le support.

**Bon développement ! 🚀**
