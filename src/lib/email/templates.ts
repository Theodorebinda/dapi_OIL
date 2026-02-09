const BRAND_RED = "#8b1a21";
const BRAND_GREEN = "#0b5c24";
const NEUTRAL_BG = "#f8fafc";
const TEXT_COLOR = "#1e293b"; // Un peu plus doux que le noir pur
const BORDER_COLOR = "#e2e8f0";
const BASE_URL = process.env.APP_BASE_URL || "https://dapioil.com";
const LOGO_URL = `${BASE_URL}/asset/logo/2-removebg-preview.png`;

export function buildContactEmail({
  title,
  intro,
  rows,
  footerNote,
}: {
  title: string;
  intro: string;
  rows: { label: string; value: string }[];
  footerNote?: string;
}) {
  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid ${BORDER_COLOR};">
            <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: ${BRAND_GREEN}; font-weight: 700; margin-bottom: 4px;">
              ${row.label}
            </span>
            <span style="display: block; font-size: 15px; color: ${TEXT_COLOR}; line-height: 1.4;">
              ${row.value}
            </span>
          </td>
        </tr>
      `,
    )
    .join("");

  return `<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; border-radius: 0 !important; }
          .content { padding: 20px !important; }
        }
      </style>
    </head>
    <body style="margin:0;padding:0;background-color:${NEUTRAL_BG};font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center" style="padding: 40px 10px;">
            <table class="container" cellpadding="0" cellspacing="0" border="0" width="800" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-top: 6px solid ${BRAND_RED};">
              
              <tr>
                <td style="padding: 32px 32px 24px; text-align: left;">
                  <table width="100%">
                    <tr>
                      <td width="64">
                        <img src="${LOGO_URL}" alt="DAPI OIL" width="64" height="64" style="display:block; border-radius:12px; background:#ffffff; object-fit:contain;" />
                      </td>
                      <td style="padding-left: 20px;">
                        <h1 style="margin:0; font-size:22px; color:${TEXT_COLOR}; font-weight: 800; line-height: 1.2;">${title}</h1>
                        <p style="margin:4px 0 0; font-size:14px; color:${BRAND_GREEN}; font-weight: 600; text-transform: uppercase;">DAPI OIL SARL</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr><td style="padding: 0 32px;"><div style="height:1px; background-color:${BORDER_COLOR};"></div></td></tr>

              <tr>
                <td class="content" style="padding: 32px;">
                  <p style="margin:0 0 24px; font-size:16px; color:#475569; line-height:1.6;">${intro}</p>
                  
                  <table role="presentation" width="100%" style="border-collapse:collapse;">
                    ${rowsHtml}
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding: 24px 32px; background-color: #f1f5f9; text-align: center;">
                  <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">
                    ${footerNote || "<strong>DAPI OIL SARL</strong><br>Import - Export des produits pétroliers<br>Kinshasa, République Démocratique du Congo"}
                  </p>
                  <div style="margin-top: 16px; font-size: 11px; color: #94a3b8;">
                   Veillez visiter le site <a href="${BASE_URL}" style="color: ${BRAND_GREEN}; text-decoration: none;">${BASE_URL}</a> pour plus d'offres et services.
                  </div>
                </td>
              </tr>
            </table>
            
            <table width="600" style="margin-top: 20px;">
              <tr>
                <td align="center" style="font-size: 12px; color: #94a3b8;">
                  &copy; ${new Date().getFullYear()} DAPI OIL SARL. Tous droits réservés.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}