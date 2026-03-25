// src/lib/email/templates/auto-reply.ts

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

const baseStyles = `
  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { border-bottom: 2px solid #007bff; padding-bottom: 20px; margin-bottom: 20px; }
  .logo { font-size: 24px; font-weight: bold; color: #007bff; }
  .content { margin-bottom: 30px; }
  .info-box { background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; margin: 20px 0; }
  .notice-box { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
  .footer { border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #666; }
  a { color: #007bff; }
`;

const footerHtml = `
  <div class="footer">
    <p>Mit freundlichen Grüßen,<br>Ihr FreyOne Team</p>
    <p>
      <a href="https://www.frey-one.com">www.frey-one.com</a> | 
      <a href="https://www.frey-one.com/datenschutz">Datenschutz</a>
    </p>
  </div>
`;

const footerText = `
Mit freundlichen Grüßen,
Ihr FreyOne Team

www.frey-one.com
`;

export const autoReplyTemplates: Record<string, EmailTemplate> = {
  default: {
    subject: 'Ihre Nachricht ist bei uns eingegangen - FreyOne',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${baseStyles}</style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">FreyOne</div>
            </div>
            <div class="content">
              <h2>Vielen Dank für Ihre Nachricht!</h2>
              <p>Ihre Anfrage ist bei uns eingegangen und wird schnellstmöglich bearbeitet.</p>
              <div class="info-box">
                <strong>Bearbeitungszeit:</strong> Wir melden uns innerhalb der nächsten 48 Stunden bei Ihnen. Bei erhöhtem Nachrichtenaufkommen kann sich diese Zeit geringfügig verlängern.
              </div>
              <p>Bitte antworten Sie nicht auf diese automatische Bestätigung.</p>
            </div>
            ${footerHtml}
          </div>
        </body>
      </html>
    `,
    text: `
Vielen Dank für Ihre Nachricht!

Ihre Anfrage ist bei uns eingegangen und wird schnellstmöglich bearbeitet.

Bearbeitungszeit: Wir melden uns innerhalb der nächsten 48 Stunden bei Ihnen. Bei erhöhtem Nachrichtenaufkommen kann sich diese Zeit geringfügig verlängern.

Bitte antworten Sie nicht auf diese automatische Bestätigung.
${footerText}
    `,
  },

  support: {
    subject: 'Support-Anfrage eingegangen - FreyOne',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${baseStyles}</style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo" style="color: #17a2b8;">FreyOne Support</div>
            </div>
            <div class="content">
              <h2>Ihre Support-Anfrage ist eingegangen!</h2>
              <p>Vielen Dank, dass Sie sich an unseren Support gewandt haben.</p>
              <div class="info-box" style="border-color: #17a2b8;">
                <strong>Bearbeitungszeit:</strong> Wir bemühen uns, Ihre Anfrage innerhalb von 48 Stunden zu beantworten. Bei erhöhtem Aufkommen kann sich diese Zeit verlängern.
              </div>
              <p>In der Zwischenzeit finden Sie möglicherweise bereits Antworten in unserem <a href="https://www.frey-one.com/faq">FAQ-Bereich</a>.</p>
            </div>
            ${footerHtml.replace('FreyOne Team', 'FreyOne Support-Team')}
          </div>
        </body>
      </html>
    `,
    text: `
Ihre Support-Anfrage ist eingegangen!

Vielen Dank, dass Sie sich an unseren Support gewandt haben.

Bearbeitungszeit: Wir bemühen uns, Ihre Anfrage innerhalb von 48 Stunden zu beantworten. Bei erhöhtem Aufkommen kann sich diese Zeit verlängern.

In der Zwischenzeit finden Sie möglicherweise bereits Antworten in unserem FAQ-Bereich:
https://www.frey-one.com/faq
${footerText.replace('FreyOne Team', 'FreyOne Support-Team')}
    `,
  },

  datenschutz: {
    subject: 'Ihre Datenschutz-Anfrage - FreyOne',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${baseStyles}</style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo" style="color: #28a745;">FreyOne Datenschutz</div>
            </div>
            <div class="content">
              <h2>Ihre Datenschutz-Anfrage ist eingegangen</h2>
              <p>Vielen Dank für Ihre Anfrage bezüglich Ihrer personenbezogenen Daten.</p>
              <div class="info-box" style="border-color: #28a745;">
                <strong>Gesetzliche Bearbeitungsfrist:</strong> Gemäß DSGVO werden wir Ihre Anfrage innerhalb von 30 Tagen bearbeiten. In komplexen Fällen kann diese Frist um weitere 60 Tage verlängert werden, worüber wir Sie informieren würden.
              </div>
              <p>Weitere Informationen zum Datenschutz finden Sie in unserer <a href="https://www.frey-one.com/datenschutz">Datenschutzerklärung</a>.</p>
            </div>
            ${footerHtml.replace('FreyOne Team', 'FreyOne Datenschutzbeauftragter')}
          </div>
        </body>
      </html>
    `,
    text: `
Ihre Datenschutz-Anfrage ist eingegangen

Vielen Dank für Ihre Anfrage bezüglich Ihrer personenbezogenen Daten.

Gesetzliche Bearbeitungsfrist: Gemäß DSGVO werden wir Ihre Anfrage innerhalb von 30 Tagen bearbeiten. In komplexen Fällen kann diese Frist um weitere 60 Tage verlängert werden.

Weitere Informationen: https://www.frey-one.com/datenschutz
${footerText.replace('FreyOne Team', 'FreyOne Datenschutzbeauftragter')}
    `,
  },

  career: {
    subject: 'Bewerbung bei FreyOne - Aktueller Stand',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${baseStyles}</style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo" style="color: #6f42c1;">FreyOne Karriere</div>
            </div>
            <div class="content">
              <h2>Vielen Dank für Ihr Interesse an FreyOne!</h2>
              <p>Wir freuen uns über Ihr Interesse an einer Mitarbeit bei FreyOne.</p>
              <div class="notice-box">
                <strong>Hinweis:</strong> Derzeit haben wir leider keine offenen Stellen zu besetzen.
              </div>
              <p>Wir nehmen Ihre Initiativbewerbung jedoch gerne in unseren Talentpool auf und melden uns bei Ihnen, sobald eine passende Position verfügbar ist.</p>
              <p>Aktuelle Stellenausschreibungen finden Sie auf unserer <a href="https://www.frey-one.com/career">Karriereseite</a>.</p>
            </div>
            ${footerHtml}
          </div>
        </body>
      </html>
    `,
    text: `
Vielen Dank für Ihr Interesse an FreyOne!

Wir freuen uns über Ihr Interesse an einer Mitarbeit bei FreyOne.

HINWEIS: Derzeit haben wir leider keine offenen Stellen zu besetzen.

Wir nehmen Ihre Initiativbewerbung jedoch gerne in unseren Talentpool auf und melden uns bei Ihnen, sobald eine passende Position verfügbar ist.

Aktuelle Stellenausschreibungen: https://www.frey-one.com/career
${footerText}
    `,
  },
};

// Mapping: E-Mail-Adresse → Template
export const emailToTemplate: Record<string, keyof typeof autoReplyTemplates> = {
  'info@frey-one.com': 'default',
  'support@frey-one.com': 'support',
  'datenschutz@frey-one.com': 'datenschutz',
  'career@frey-one.com': 'career',
};