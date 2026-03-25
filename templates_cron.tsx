// src/lib/email/templates/templates_cron.tsx
// Admin & System Report Emails nach Preview.tsx-Standard
// Kategorie: Cron - variant="system"

import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview as EmailPreview,
  Section,
  Text,
} from '@react-email/components';
import { EmailFooter } from 'src/components/EmailFooter/EmailFooter';
import { styles } from './emailStyles';

// =============================================================================
// Cron Job Alert / System-Fehler
// =============================================================================
// Kategorie: Cron
// Zweck: Wird versendet wenn ein automatisierter Cron-Job fehlschlägt oder Warnings auftreten
// =============================================================================

interface CronAlertEmailProps {
  alertType?: string;
  message?: string;
  timestamp?: string;
}

export function CronAlertEmail({
  alertType = 'error',
  message = 'System Alert',
  timestamp = new Date().toISOString(),
}: CronAlertEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>System Alert: {alertType}</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>System Alert 🚨</Heading>

          <Section style={styles.statsBox}>
            <Text style={styles.statLabel}>Typ:</Text>
            <Text style={styles.statValue}>{alertType}</Text>
            <Text style={styles.statLabel}>Nachricht:</Text>
            <Text style={styles.text}>{message}</Text>
            <Text style={styles.statLabel}>Zeit:</Text>
            <Text style={styles.text}>{timestamp}</Text>
          </Section>

          <Section style={styles.buttonSection}>
            <Button href="https://frey-one.com/admin/logs" style={styles.button}>
              Logs ansehen
            </Button>
          </Section>

          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Täglicher Plattform-Report
// =============================================================================
// Kategorie: Cron
// Zweck: Wird täglich versendet mit den wichtigsten Kennzahlen des Tages
// =============================================================================

interface ReportEmailProps {
  date?: string;
  bookings?: number;
  revenue?: number;
}

export function ReportEmail({
  date = new Date().toLocaleDateString('de-DE'),
  bookings = 0,
  revenue = 0,
}: ReportEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Tagesbericht {date}</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Tagesbericht</Heading>

          <Text style={styles.text}>Datum: {date}</Text>

          <Section style={styles.statsBox}>
            <Text style={styles.statLabel}>Buchungen:</Text>
            <Text style={styles.statValue}>{bookings}</Text>
            <Text style={styles.statLabel}>Umsatz:</Text>
            <Text style={styles.statValue}>{revenue.toFixed(2)} €</Text>
          </Section>

          <Section style={styles.buttonSection}>
            <Button href="https://frey-one.com/admin/reports" style={styles.button}>
              Detaillierte Ansicht
            </Button>
          </Section>

          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Monatlicher Plattform-Report
// =============================================================================
// Kategorie: Cron
// Zweck: Wird monatlich versendet mit Zusammenfassung aller Aktivitäten
// =============================================================================

interface MonthlyReportEmailProps {
  month?: string;
  bookings?: number;
  revenue?: number;
  growth?: number;
}

export function MonthlyReportEmail({
  month = 'März 2026',
  bookings = 150,
  revenue = 5000,
  growth = 12,
}: MonthlyReportEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Monatsbericht {month}</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Monatsbericht {month}</Heading>

          <Section style={styles.statsBox}>
            <Text style={styles.statLabel}>Buchungen:</Text>
            <Text style={styles.statValue}>{bookings}</Text>
            <Text style={styles.statLabel}>Umsatz:</Text>
            <Text style={styles.statValue}>{revenue.toFixed(2)} €</Text>
            <Text style={styles.statLabel}>Wachstum:</Text>
            <Text style={styles.statValue}>+{growth}%</Text>
          </Section>

          <Section style={styles.buttonSection}>
            <Button href="https://frey-one.com/admin/reports/monthly" style={styles.button}>
              Vollständiger Bericht
            </Button>
          </Section>

          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Monatlicher Finanzbericht
// =============================================================================
// Kategorie: Cron
// Zweck: Wird monatlich versendet mit detaillierten Finanzzahlen (Umsatz, Gebühren, Auszahlungen)
// =============================================================================

interface MonthlyFinancialReportEmailProps {
  month?: string;
  totalRevenue?: number;
  platformFee?: number;
  payouts?: number;
}

export function MonthlyFinancialReportEmail({
  month = 'März 2026',
  totalRevenue = 50000,
  platformFee = 5000,
  payouts = 45000,
}: MonthlyFinancialReportEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Finanzbericht {month}</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Finanzbericht {month}</Heading>

          <Section style={styles.statsBox}>
            <Text style={styles.statLabel}>Gesamtumsatz:</Text>
            <Text style={styles.statValue}>{totalRevenue.toFixed(2)} €</Text>
            <Text style={styles.statLabel}>Plattformgebühr:</Text>
            <Text style={styles.statValue}>{platformFee.toFixed(2)} €</Text>
            <Text style={styles.statLabel}>Auszahlungen:</Text>
            <Text style={styles.statValue}>{payouts.toFixed(2)} €</Text>
          </Section>

          <Section style={styles.buttonSection}>
            <Button href="https://frey-one.com/admin/reports/financial" style={styles.button}>
              Detaillierte Übersicht
            </Button>
          </Section>

          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}
