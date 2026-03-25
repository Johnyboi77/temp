// src/lib/email/components/EmailFooter.tsx

import * as React from 'react';
import { Section, Text, Link } from '@react-email/components';
import { COMPANY } from 'src/lib/email/templates/company.config';

// ─── Types ────────────────────────────────────────────────────────────────────
type FooterVariant = 'system' | 'marketing' | 'legal';

interface EmailFooterProps {
  variant?: FooterVariant;
  // Nur für 'marketing' – Pflicht bei Newsletter/Marketing-Mails
  unsubscribeUrl?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function EmailFooter({
  variant = 'system',
  unsubscribeUrl,
}: EmailFooterProps) {
  return (
    <Section style={styles.footer}>

      {/* ── SYSTEM ─────────────────────────────────────────────────────────
          Für:      E-Mail-Bestätigung, Passwort-Reset, System-Benachrichtigungen
          Regeln:   Kein Opt-Out (funktional notwendig) · Keine Werbung
          Enthält:  Firmenname · Inhaber · Adresse · Impressum · Datenschutz
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'system' && (
        <>
          <Text style={styles.divider}>--</Text>

          <Text style={styles.brand}>{COMPANY.name}</Text>
          <Text style={styles.meta}>Geschäftsführer: {COMPANY.ceo}</Text>
          <Text style={styles.meta}>{COMPANY.address}</Text>

          <Text style={styles.linkLine}>
            <Link href={COMPANY.links.imprint} style={styles.link}>
              Impressum
            </Link>
            {'  ·  '}
            <Link href={COMPANY.links.privacy} style={styles.link}>
              Datenschutz
            </Link>
          </Text>
        </>
      )}

      {/* ── MARKETING ──────────────────────────────────────────────────────
          Für:      Newsletter, Bewertungsanfragen, Buchungserinnerungen,
                    Angebote & Marketing (kommt später)
          Regeln:   Opt-Out / Abmelde-Link PFLICHT (§ 7 UWG)
          Enthält:  Firmenname · Inhaber · Adresse · Abmelde-Link ·
                    Impressum · Datenschutz
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'marketing' && (
        <>
          <Text style={styles.divider}>--</Text>

          <Text style={styles.brand}>{COMPANY.name}</Text>
          <Text style={styles.meta}>Geschäftsführer: {COMPANY.ceo}</Text>
          <Text style={styles.meta}>{COMPANY.address}</Text>

          <Text style={styles.unsubscribeNote}>
            Du erhältst diese Mail, weil du dich für unseren Service angemeldet hast.
          </Text>

          {unsubscribeUrl && (
            <Text style={styles.unsubscribeLine}>
              <Link href={unsubscribeUrl} style={styles.unsubscribeLink}>
                Abmelden
              </Link>
            </Text>
          )}

          <Text style={styles.linkLine}>
            <Link href={COMPANY.links.imprint} style={styles.link}>
              Impressum
            </Link>
            {'  ·  '}
            <Link href={COMPANY.links.privacy} style={styles.link}>
              Datenschutz
            </Link>
          </Text>
        </>
      )}

      {/* ── LEGAL ──────────────────────────────────────────────────────────
          Für:      Abo-Abschluss, Buchungsbestätigung (mit Zahlung),
                    Rechnungen, Stornierungen, Rückerstattungen
          Regeln:   Alle Pflichtangaben nach § 5 TMG/DDG
                    + Steuerangaben + Widerrufsbelehrung
          Enthält:  Firmenname · Inhaber · Adresse · E-Mail · Tel ·
                    Steuernummer · Handelsregister ·
                    Kleinunternehmerregelung · AGB · Widerruf ·
                    Datenschutz · Impressum
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'legal' && (
        <>
          <Text style={styles.divider}>--</Text>

          <Text style={styles.brand}>{COMPANY.name}</Text>
          <Text style={styles.meta}>Geschäftsführer: {COMPANY.ceo}</Text>
          <Text style={styles.meta}>{COMPANY.address}</Text>
          <Text style={styles.meta}>
            E-Mail:{' '}
            <Link href={`mailto:${COMPANY.email}`} style={styles.link}>
              {COMPANY.email}
            </Link>
            {'  ·  '}
            Tel: {COMPANY.phone}
          </Text>

          <Text style={styles.metaSpaced}>
            Steuernummer: {COMPANY.taxId}
          </Text>
          {COMPANY.hrb && (
            <Text style={styles.meta}>
              Handelsregister: {COMPANY.hrb}
              {COMPANY.court ? ` (${COMPANY.court})` : ''}
            </Text>
          )}

          <Text style={styles.smallBusiness}>
            {COMPANY.SmallBusinessLaw}
          </Text>

          <Text style={styles.legalHeading}>Rechtliches:</Text>
          <Text style={styles.linkLine}>
            <Link href={COMPANY.links.agb} style={styles.link}>AGB</Link>
            {'  ·  '}
            <Link href={COMPANY.links.revocation} style={styles.link}>
              Widerrufsbelehrung
            </Link>
            {'  ·  '}
            <Link href={COMPANY.links.privacy} style={styles.link}>
              Datenschutz
            </Link>
            {'  ·  '}
            <Link href={COMPANY.links.imprint} style={styles.link}>
              Impressum
            </Link>
          </Text>
        </>
      )}

    </Section>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {
  footer: {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '20px',
    marginTop: '8px',
  },
  divider: {
    color: '#d1d5db',
    fontSize: '11px',
    margin: '0 0 12px',
    lineHeight: '16px',
  },

  // Firmenname
  brand: {
    color: '#6b7280',
    fontSize: '12px',
    fontWeight: '700',
    margin: '0 0 2px',
    lineHeight: '18px',
  },

  // Inhaber, Adresse, Kontakt
  meta: {
    color: '#9ca3af',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '0 0 2px',
  },
  metaSpaced: {
    color: '#9ca3af',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '10px 0 2px',
  },

  // Kleinunternehmerregelung
  smallBusiness: {
    color: '#9ca3af',
    fontSize: '10px',
    lineHeight: '16px',
    margin: '10px 0 8px',
  },

  // "Rechtliches:" Label (nur legal)
  legalHeading: {
    color: '#6b7280',
    fontSize: '11px',
    fontWeight: '700',
    margin: '8px 0 4px',
    lineHeight: '18px',
  },

  // Marketing: Opt-Out Hinweis
  unsubscribeNote: {
    color: '#9ca3af',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '10px 0 4px',
  },
  unsubscribeLine: {
    margin: '0 0 8px',
    lineHeight: '18px',
  },
  unsubscribeLink: {
    color: '#6b7280',
    fontSize: '11px',
    textDecoration: 'underline',
  },

  // Links
  linkLine: {
    color: '#9ca3af',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '8px 0 0',
  },
  link: {
    color: '#9ca3af',
    textDecoration: 'underline',
  },
} as const;