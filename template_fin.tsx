// src/lib/email/templates/template_fin.tsx
// Buchungs- und Finanz-Emails nach Preview.tsx-Standard
// Kategorie: Financial - variant="marketing"

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
// Buchungsbestätigung
// =============================================================================
// Kategorie: Financial
// Zweck: Bestätigung einer erfolgreichen Buchung für den Kunden
// =============================================================================

interface BookingConfirmationProps {
  bookingId: string;
  serviceName: string;
  providerName: string;
  date: string;
  time: string;
  price: number;
  customerName: string;
  address?: string;
}

export function BookingConfirmation({
  bookingId,
  serviceName,
  providerName,
  date,
  time,
  price,
  customerName,
  address,
}: BookingConfirmationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Buchung bestätigt ✓</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Buchung bestätigt ✓
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* CONFIRMATION MESSAGE */}
          <Text style={styles.text}>
            Ihre Buchung wurde erfolgreich bestätigt!
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Anbieter:</Text>
            <Text style={styles.infoValue}>{providerName}</Text>

            <Text style={styles.infoLabel}>Datum:</Text>
            <Text style={styles.infoValue}>{date}</Text>

            <Text style={styles.infoLabel}>Uhrzeit:</Text>
            <Text style={styles.infoValue}>{time}</Text>

            {address && (
              <>
                <Text style={styles.infoLabel}>Adresse:</Text>
                <Text style={styles.infoValue}>{address}</Text>
              </>
            )}

            <Text style={styles.infoLabel}>Preis:</Text>
            <Text style={styles.infoValue}>{price.toFixed(2)} €</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={`https://frey-one.com/bookings/${bookingId}`} style={styles.button}>
              Buchung ansehen
            </Button>
          </Section>

          {/* ADDITIONAL INFO */}
          <Text style={styles.hint}>
            Sie erhalten eine Erinnerung 24 Stunden vor Ihrem Termin.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Buchungsstornierung
// =============================================================================
// Kategorie: Financial
// Zweck: Bestätigung einer Buchungsstornierung
// =============================================================================

interface BookingCancellationProps {
  bookingId: string;
  serviceName: string;
  providerName: string;
  date: string;
  time: string;
  customerName: string;
  reason?: string;
}

export function BookingCancellation({
  bookingId,
  serviceName,
  providerName,
  date,
  time,
  customerName,
  reason,
}: BookingCancellationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Buchung storniert</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Buchung storniert
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* CANCELLATION MESSAGE */}
          <Text style={styles.text}>
            Ihre Buchung wurde storniert.
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Anbieter:</Text>
            <Text style={styles.infoValue}>{providerName}</Text>

            <Text style={styles.infoLabel}>Datum:</Text>
            <Text style={styles.infoValue}>{date}</Text>

            <Text style={styles.infoLabel}>Uhrzeit:</Text>
            <Text style={styles.infoValue}>{time}</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>

            {reason && (
              <>
                <Text style={styles.infoLabel}>Grund:</Text>
                <Text style={styles.infoValue}>{reason}</Text>
              </>
            )}
          </Section>

          {/* REFUND INFO */}
          <Text style={styles.text}>
            Eventuelle Rückerstattungen werden gemäß unseren Stornierungsbedingungen bearbeitet.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href="https://frey-one.com/search" style={styles.button}>
              Neue Buchung vornehmen
            </Button>
          </Section>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Buchungserinnerung
// =============================================================================
// Kategorie: Financial
// Zweck: Erinnerung an bevorstehenden Termin (24h vorher)
// =============================================================================

interface BookingReminderProps {
  bookingId: string;
  serviceName: string;
  providerName: string;
  date: string;
  time: string;
  customerName: string;
  address?: string;
}

export function BookingReminder({
  bookingId,
  serviceName,
  providerName,
  date,
  time,
  customerName,
  address,
}: BookingReminderProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Erinnerung: Ihr Termin steht bevor</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Erinnerung: Ihr Termin steht bevor
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* REMINDER MESSAGE */}
          <Text style={styles.text}>
            Dies ist eine freundliche Erinnerung an Ihren bevorstehenden Termin:
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Anbieter:</Text>
            <Text style={styles.infoValue}>{providerName}</Text>

            <Text style={styles.infoLabel}>Datum:</Text>
            <Text style={styles.infoValue}>{date}</Text>

            <Text style={styles.infoLabel}>Uhrzeit:</Text>
            <Text style={styles.infoValue}>{time}</Text>

            {address && (
              <>
                <Text style={styles.infoLabel}>Adresse:</Text>
                <Text style={styles.infoValue}>{address}</Text>
              </>
            )}

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={`https://frey-one.com/bookings/${bookingId}`} style={styles.button}>
              Buchungsdetails ansehen
            </Button>
          </Section>

          {/* CLOSING MESSAGE */}
          <Text style={styles.hint}>
            Wir freuen uns auf Ihren Besuch!
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Buchungserinnerung (1 Stunde vorher)
// =============================================================================
// Kategorie: Financial
// Zweck: Dringende Erinnerung 1 Stunde vor Termin
// =============================================================================

export function BookingReminderUrgent({
  bookingId,
  serviceName,
  providerName,
  date,
  time,
  customerName,
  address,
}: BookingReminderProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>⏰ Ihr Termin beginnt in 1 Stunde!</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            ⏰ Ihr Termin beginnt in 1 Stunde!
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* URGENT MESSAGE */}
          <Text style={styles.text}>
            Ihr Termin beginnt in <strong>einer Stunde</strong>. Bitte stellen Sie sicher, dass Sie rechtzeitig dort sind.
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Anbieter:</Text>
            <Text style={styles.infoValue}>{providerName}</Text>

            <Text style={styles.infoLabel}>Datum:</Text>
            <Text style={styles.infoValue}>{date}</Text>

            <Text style={styles.infoLabel}>Uhrzeit:</Text>
            <Text style={styles.infoValue}>{time}</Text>

            {address && (
              <>
                <Text style={styles.infoLabel}>Adresse:</Text>
                <Text style={styles.infoValue}>{address}</Text>
              </>
            )}

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={`https://frey-one.com/bookings/${bookingId}`} style={styles.button}>
              Buchungsdetails ansehen
            </Button>
          </Section>

          {/* CLOSING MESSAGE */}
          <Text style={styles.hint}>
            Bis gleich! 🎉
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Neue Buchung (für Provider)
// =============================================================================
// Kategorie: Financial
// Zweck: Benachrichtigung für Provider über neue Buchung
// =============================================================================

interface NewBookingProps {
  providerName: string;
  serviceName: string;
  customerName: string;
  date: string;
  time: string;
  bookingId: string;
}

export function NewBooking({
  providerName,
  serviceName,
  customerName,
  date,
  time,
  bookingId,
}: NewBookingProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Neue Buchung 🎉</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Neue Buchung 🎉
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {providerName},
          </Text>

          {/* SUCCESS MESSAGE */}
          <Text style={styles.text}>
            <strong>Großartig!</strong> Sie haben eine neue Buchung erhalten!
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Kunde:</Text>
            <Text style={styles.infoValue}>{customerName}</Text>

            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Datum:</Text>
            <Text style={styles.infoValue}>{date}</Text>

            <Text style={styles.infoLabel}>Uhrzeit:</Text>
            <Text style={styles.infoValue}>{time}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={`https://frey-one.com/bookings/${bookingId}`} style={styles.button}>
              Buchung ansehen
            </Button>
          </Section>

          {/* CLOSING MESSAGE */}
          <Text style={styles.text}>
            <strong>Bereiten Sie sich vor und liefern Sie beste Qualität!</strong> ⭐
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Bewertungsanfrage
// =============================================================================
// Kategorie: Financial
// Zweck: Aufforderung zur Bewertung nach abgeschlossener Buchung
// =============================================================================

interface ReviewRequestProps {
  customerName: string;
  serviceName: string;
  providerName: string;
  bookingId: string;
}

export function ReviewRequest({
  customerName,
  serviceName,
  providerName,
  bookingId,
}: ReviewRequestProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Bewerten Sie Ihre letzte Buchung</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Bewerten Sie Ihre letzte Buchung
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* REVIEW REQUEST MESSAGE */}
          <Text style={styles.text}>
            Wie war Ihre Erfahrung mit <strong>{providerName}</strong>?
          </Text>

          <Text style={styles.text}>
            Ihre Bewertung hilft anderen Kunden bei der Entscheidung und unterstützt
            Anbieter dabei, ihren Service zu verbessern.
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Anbieter:</Text>
            <Text style={styles.infoValue}>{providerName}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={`https://frey-one.com/bookings/${bookingId}/review`} style={styles.button}>
              Jetzt bewerten
            </Button>
          </Section>

          {/* ADDITIONAL INFO */}
          <Text style={styles.hint}>
            Die Bewertung dauert nur 1 Minute! ⭐
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Zahlungsbestätigung
// =============================================================================
// Kategorie: Financial
// Zweck: Bestätigung einer erfolgreichen Zahlung für eine Buchung
// =============================================================================

interface PaymentConfirmationProps {
  customerName: string;
  amount: number;
  bookingId: string;
  serviceName: string;
  transactionId: string;
  paymentMethod?: string;
  invoiceUrl?: string;
}

export function PaymentConfirmation({
  customerName,
  amount,
  bookingId,
  serviceName,
  transactionId,
  paymentMethod = 'Kreditkarte',
  invoiceUrl = 'https://frey-one.com/invoices/abc123',
}: PaymentConfirmationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Zahlung bestätigt ✓</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Zahlung bestätigt ✓
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* CONFIRMATION MESSAGE */}
          <Text style={styles.text}>
            Vielen Dank! Ihre Zahlung wurde erfolgreich verarbeitet.
          </Text>

          {/* PAYMENT DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Betrag:</Text>
            <Text style={styles.infoValue}>{amount.toFixed(2)} €</Text>

            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>

            <Text style={styles.infoLabel}>Transaktions-ID:</Text>
            <Text style={styles.infoValue}>{transactionId}</Text>

            <Text style={styles.infoLabel}>Zahlungsart:</Text>
            <Text style={styles.infoValue}>{paymentMethod}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={invoiceUrl} style={styles.button}>
              Rechnung ansehen
            </Button>
          </Section>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Zahlungsfehler
// =============================================================================
// Kategorie: Financial
// Zweck: Fehlerbenachrichtigung wenn Zahlung fehlgeschlagen ist
// =============================================================================

interface PaymentFailedProps {
  customerName: string;
  amount: number;
  bookingId: string;
  reason?: string;
  retryUrl?: string;
  supportUrl?: string;
}

export function PaymentFailed({
  customerName,
  amount,
  bookingId,
  reason = 'Zahlung wurde abgelehnt',
  retryUrl = 'https://frey-one.com/bookings/payment/retry',
  supportUrl = 'https://frey-one.com/support',
}: PaymentFailedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Zahlungsfehler – Bitte versuchen Sie es erneut</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            ⚠️ Zahlungsfehler
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* ERROR MESSAGE */}
          <Text style={styles.text}>
            Leider konnte Ihre Zahlung nicht verarbeitet werden.
          </Text>

          {/* ERROR DETAILS */}
          <Section style={styles.warningBox}>
            <Text style={styles.warningText}>
              Grund: {reason}
            </Text>
          </Section>

          {/* PAYMENT DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Betrag:</Text>
            <Text style={styles.infoValue}>{amount.toFixed(2)} €</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={retryUrl} style={styles.button}>
              Zahlung erneut versuchen
            </Button>
          </Section>

          {/* SUPPORT INFO */}
          <Text style={styles.hint}>
            Falls das Problem weiterhin besteht, kontaktieren Sie unser Support-Team.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Rückerstattungsbestätigung
// =============================================================================
// Kategorie: Financial
// Zweck: Bestätigung einer erfolgten Rückerstattung
// =============================================================================

interface RefundConfirmationProps {
  customerName: string;
  refundAmount: number;
  bookingId: string;
  serviceName: string;
  refundDate: string;
  transactionId?: string;
}

export function RefundConfirmation({
  customerName,
  refundAmount,
  bookingId,
  serviceName,
  refundDate,
  transactionId,
}: RefundConfirmationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Rückerstattung bestätigt</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Rückerstattung verarbeitet
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* CONFIRMATION MESSAGE */}
          <Text style={styles.text}>
            Ihre Rückerstattung wurde bestätigt und wird in Kürze auf Ihr Konto übertragen.
          </Text>

          {/* REFUND DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Rückerstattungsbetrag:</Text>
            <Text style={styles.infoValue}>{refundAmount.toFixed(2)} €</Text>

            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>

            <Text style={styles.infoLabel}>Verarbeitungsdatum:</Text>
            <Text style={styles.infoValue}>{refundDate}</Text>

            {transactionId && (
              <>
                <Text style={styles.infoLabel}>Transaktions-ID:</Text>
                <Text style={styles.infoValue}>{transactionId}</Text>
              </>
            )}
          </Section>

          {/* INFO */}
          <Text style={styles.hint}>
            Die Rückerstattung erscheint in 3-5 Werktagen auf Ihrer Kreditkarte oder Ihrem Konto.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Rechnung / Invoice
// =============================================================================
// Kategorie: Financial
// Zweck: Versand der Rechnung für eine Buchung/Transaktion
// =============================================================================

interface InvoiceEmailProps {
  customerName: string;
  amount: number;
  bookingId: string;
  serviceName: string;
  invoiceNumber: string;
  invoiceDate: string;
  invoiceUrl?: string;
  downloadUrl?: string;
}

export function InvoiceEmail({
  customerName,
  amount,
  bookingId,
  serviceName,
  invoiceNumber,
  invoiceDate,
  invoiceUrl = 'https://frey-one.com/invoices/view',
  downloadUrl = 'https://frey-one.com/invoices/download',
}: InvoiceEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Rechnung #{invoiceNumber}</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Ihre Rechnung
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* INFO MESSAGE */}
          <Text style={styles.text}>
            Anbei erhalten Sie Ihre Rechnung für die erbrachte Dienstleistung.
          </Text>

          {/* INVOICE DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Rechnungsnummer:</Text>
            <Text style={styles.infoValue}>{invoiceNumber}</Text>

            <Text style={styles.infoLabel}>Rechnungsdatum:</Text>
            <Text style={styles.infoValue}>{invoiceDate}</Text>

            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>

            <Text style={styles.infoLabel}>Gesamtbetrag:</Text>
            <Text style={styles.infoValue}>{amount.toFixed(2)} €</Text>
          </Section>

          {/* CTA BUTTONS */}
          <Section style={styles.buttonSection}>
            <Button href={downloadUrl} style={styles.button}>
              Rechnung herunterladen
            </Button>
          </Section>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Auszahlungsbestätigung (für Provider)
// =============================================================================
// Kategorie: Financial
// Zweck: Bestätigung einer Auszahlung für Provider
// =============================================================================

interface PayoutConfirmationProps {
  providerName: string;
  payoutAmount: number;
  payoutDate: string;
  payoutMethod?: string;
  bankAccount?: string;
  transactionId?: string;
  dashboardUrl?: string;
}

export function PayoutConfirmation({
  providerName,
  payoutAmount,
  payoutDate,
  payoutMethod = 'Banküberweisung',
  bankAccount = '****...****',
  transactionId,
  dashboardUrl = 'https://frey-one.com/dashboard/payouts',
}: PayoutConfirmationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Auszahlung verarbeitet</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Auszahlung verarbeitet 💰
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {providerName},
          </Text>

          {/* CONFIRMATION MESSAGE */}
          <Text style={styles.text}>
            Ihre Auszahlung wurde verarbeitet und wird in Kürze auf Ihr Konto übertragen.
          </Text>

          {/* PAYOUT DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Auszahlungsbetrag:</Text>
            <Text style={styles.infoValue}>{payoutAmount.toFixed(2)} €</Text>

            <Text style={styles.infoLabel}>Auszahlungsdatum:</Text>
            <Text style={styles.infoValue}>{payoutDate}</Text>

            <Text style={styles.infoLabel}>Zahlungsmethode:</Text>
            <Text style={styles.infoValue}>{payoutMethod}</Text>

            <Text style={styles.infoLabel}>Bankkonto:</Text>
            <Text style={styles.infoValue}>{bankAccount}</Text>

            {transactionId && (
              <>
                <Text style={styles.infoLabel}>Transaktions-ID:</Text>
                <Text style={styles.infoValue}>{transactionId}</Text>
              </>
            )}
          </Section>

          {/* INFO */}
          <Text style={styles.hint}>
            Die Auszahlung erscheint in 1-3 Werktagen auf Ihrem Bankkonto.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={dashboardUrl} style={styles.button}>
              Auszahlungsverlauf ansehen
            </Button>
          </Section>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Buchung geändert
// =============================================================================
// Kategorie: Financial
// Zweck: Benachrichtigung wenn Buchungsdetails geändert wurden (Zeit, Datum, etc.)
// =============================================================================

interface BookingModifiedProps {
  customerName: string;
  bookingId: string;
  serviceName: string;
  oldDate?: string;
  oldTime?: string;
  newDate: string;
  newTime: string;
  bookingUrl?: string;
}

export function BookingModified({
  customerName,
  bookingId,
  serviceName,
  oldDate,
  oldTime,
  newDate,
  newTime,
  bookingUrl = 'https://frey-one.com/bookings/',
}: BookingModifiedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Buchung geändert</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            Buchung wurde geändert
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {customerName},
          </Text>

          {/* INFO MESSAGE */}
          <Text style={styles.text}>
            Die Details Ihrer Buchung wurden aktualisiert. Hier sind die neuen Informationen:
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>

            {oldDate && oldTime && (
              <>
                <Text style={styles.infoLabel}>Alter Termin:</Text>
                <Text style={styles.infoValue}>{oldDate} um {oldTime} Uhr</Text>
              </>
            )}

            <Text style={styles.infoLabel}>Neuer Termin:</Text>
            <Text style={styles.infoValue}>{newDate} um {newTime} Uhr</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={bookingUrl + bookingId} style={styles.button}>
              Buchungsdetails ansehen
            </Button>
          </Section>

          {/* INFO */}
          <Text style={styles.hint}>
            Falls Sie diese Änderung nicht vorgenommen haben, kontaktieren Sie bitte sofort den Anbieter.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Buchungsstornierung (Provider-Perspektive)
// =============================================================================
// Kategorie: Financial
// Zweck: Benachrichtigung für Provider wenn eine Buchung storniert wurde
// =============================================================================

interface BookingCancellationProviderProps {
  providerName: string;
  bookingId: string;
  serviceName: string;
  customerName: string;
  date: string;
  time: string;
  reason?: string;
  dashboardUrl?: string;
}

export function BookingCancellationProvider({
  providerName,
  bookingId,
  serviceName,
  customerName,
  date,
  time,
  reason,
  dashboardUrl = 'https://frey-one.com/dashboard/bookings',
}: BookingCancellationProviderProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Buchung wurde storniert</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* LOGO */}
          <Section style={styles.logoSection}>
            <Img
              src="https://frey-one.com/logo-icon.png"
              width="36"
              height="36"
              alt="FreyOne"
            />
          </Section>

          {/* HEADING */}
          <Heading style={styles.heading}>
            ⚠️ Buchung storniert
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {providerName},
          </Text>

          {/* INFO MESSAGE */}
          <Text style={styles.text}>
            Eine Ihrer Buchungen wurde storniert.
          </Text>

          {/* BOOKING DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Kunde:</Text>
            <Text style={styles.infoValue}>{customerName}</Text>

            <Text style={styles.infoLabel}>Dienstleistung:</Text>
            <Text style={styles.infoValue}>{serviceName}</Text>

            <Text style={styles.infoLabel}>Datum:</Text>
            <Text style={styles.infoValue}>{date}</Text>

            <Text style={styles.infoLabel}>Uhrzeit:</Text>
            <Text style={styles.infoValue}>{time}</Text>

            <Text style={styles.infoLabel}>Buchungsnummer:</Text>
            <Text style={styles.infoValue}>{bookingId}</Text>

            {reason && (
              <>
                <Text style={styles.infoLabel}>Grund:</Text>
                <Text style={styles.infoValue}>{reason}</Text>
              </>
            )}
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={dashboardUrl} style={styles.button}>
              Zu Ihren Buchungen
            </Button>
          </Section>

          {/* FOOTER */}
          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}
