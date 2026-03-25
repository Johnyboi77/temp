// src/lib/email/templates/templates_mkt.tsx
// Marketing & Onboarding Emails nach Preview.tsx-Standard
// Kategorie: Marketing - variant="marketing"

import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview as EmailPreview,
  Section,
  Text,
} from '@react-email/components';
import { EmailFooter } from 'src/components/EmailFooter/EmailFooter';
import { styles } from './emailStyles';

// =============================================================================
// Provider Onboarding Start
// =============================================================================
// Kategorie: Marketing
// Zweck: Willkommensnachricht für neue Provider / Partner
// =============================================================================

interface ProviderOnboardingStartProps {
  firstName?: string;
  profileUrl?: string;
  unsubscribeUrl?: string;
}

export function ProviderOnboardingStart({
  firstName = 'Partner',
  profileUrl = 'https://frey-one.com/profile',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: ProviderOnboardingStartProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Willkommen! So starten Sie</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Willkommen {firstName}!</Heading>

          <Text style={styles.text}>
            Du hast den ersten Schritt gemacht – jetzt geht's los! In wenigen einfachen Schritten zu deinen ersten Kunden.
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={profileUrl} style={styles.button}>
              Profil vervollständigen
            </Button>
          </Section>

          <Text style={styles.text}>
            Wir freuen uns, dich an Bord zu haben. Bei Fragen hilft dir unser Support-Team gerne weiter.
          </Text>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Provider Profil unvollständig
// =============================================================================
// Kategorie: Marketing
// Zweck: Erinnerung um Profil zu vervollständigen
// =============================================================================

interface ProviderProfileIncompleteProps {
  firstName?: string;
  profileUrl?: string;
  unsubscribeUrl?: string;
}

export function ProviderProfileIncomplete({
  firstName = 'Partner',
  profileUrl = 'https://frey-one.com/profile',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: ProviderProfileIncompleteProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Profil vervollständigen</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Profil fast komplett!</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Dein Profil ist zu {80}% vollständig. Nur noch ein paar Details und du kannst mit Buchungen starten!
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={profileUrl} style={styles.button}>
              Jetzt vervollständigen
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Erstes Angebot erstellen
// =============================================================================
// Kategorie: Marketing
// Zweck: Anleitung um erste Dienstleistung / Angebot zu erstellen
// =============================================================================

interface FirstListingGuideProps {
  firstName?: string;
  listingUrl?: string;
  unsubscribeUrl?: string;
}

export function FirstListingGuide({
  firstName = 'Partner',
  listingUrl = 'https://frey-one.com/listings/new',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: FirstListingGuideProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Erstes Angebot erstellen</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Erstes Angebot erstellen</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Es ist Zeit, deine Dienstleistung anzubieten! Erstelle dein erstes Angebot und starte mit deinen ersten Buchungen.
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={listingUrl} style={styles.button}>
              Angebot erstellen
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Glückwunsch zum ersten Verkauf
// =============================================================================
// Kategorie: Marketing
// Zweck: Gratulation nach erste erfolgreiche Buchung
// =============================================================================

interface FirstSaleCongratsProps {
  firstName?: string;
  dashboardUrl?: string;
  unsubscribeUrl?: string;
}

export function FirstSaleCongrats({
  firstName = 'Partner',
  dashboardUrl = 'https://frey-one.com/dashboard',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: FirstSaleCongratsProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Glückwunsch zum ersten Verkauf!</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Glückwunsch! 🎉</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Herzlichen Glückwunsch zu deiner ersten erfolgreichen Buchung! Das ist nur der Anfang. Viel Erfolg mit deinem Angebot!
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={dashboardUrl} style={styles.button}>
              Zum Dashboard
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Erinnerung: Keine Aktivität
// =============================================================================
// Kategorie: Marketing
// Zweck: Re-engagement Email wenn Provider längere Zeit inaktiv ist
// =============================================================================

interface NoActivityReminderProps {
  firstName?: string;
  daysInactive?: number;
  dashboardUrl?: string;
  unsubscribeUrl?: string;
}

export function NoActivityReminder({
  firstName = 'Partner',
  daysInactive = 7,
  dashboardUrl = 'https://frey-one.com/dashboard',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: NoActivityReminderProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Wir vermissen dich!</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Wir vermissen dich!</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Seit {daysInactive} Tagen haben wir keine Aktivität von dir gesehen. Schau doch mal rein und sieh welche neuen Möglichkeiten warten!
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={dashboardUrl} style={styles.button}>
              Zum Dashboard
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Neue Bewertung erhalten
// =============================================================================
// Kategorie: Marketing
// Zweck: Benachrichtigung wenn Kund*in eine Bewertung abgegeben hat
// =============================================================================

interface NewReviewReceivedProps {
  firstName?: string;
  rating?: number;
  reviewUrl?: string;
  unsubscribeUrl?: string;
}

export function NewReviewReceived({
  firstName = 'Partner',
  rating = 5,
  reviewUrl = 'https://frey-one.com/reviews',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: NewReviewReceivedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Neue Bewertung: {rating} Sterne</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Neue Bewertung! ⭐</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Du hast eine {rating}★ Bewertung erhalten! Schau dir an, was dein Kunde zu sagen hat.
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={reviewUrl} style={styles.button}>
              Bewertung ansehen
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Refer2YourFriends - Referral Einladung
// =============================================================================
// Kategorie: Marketing
// Zweck: Aufforderung um Freunde / Bekannte zu empfehlen
// =============================================================================

interface Refer2YourFriendsProps {
  firstName?: string;
  referralUrl?: string;
  unsubscribeUrl?: string;
}

export function Refer2YourFriends({
  firstName = 'User',
  referralUrl = 'https://frey-one.com/referral',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: Refer2YourFriendsProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Empfehlen Sie FreyOne</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Verdienen mit Freunden! 💰</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Empfehle FreyOne weiter und verdiene mit jedem erfolgreichen Referral. Teile deinen persönlichen Link und starte!
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={referralUrl} style={styles.button}>
              Referral-Link
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Gewerbeanmeldungs-Guide
// =============================================================================
// Kategorie: Marketing
// Zweck: Anleitung zur Gewerbeanmeldung für neue Provider
// =============================================================================

interface BusinessRegistrationEmailProps {
  firstName?: string;
  guideUrl?: string;
  unsubscribeUrl?: string;
}

export function BusinessRegistrationEmail({
  firstName = 'Partner',
  guideUrl = 'https://frey-one.com/guides/business',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: BusinessRegistrationEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Gewerbeanmeldung Guide</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Gewerbeanmeldung leicht gemacht</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Wenn du als Dienstleister tätig werden möchtest, benötigst du eine Gewerbeanmeldung. Hier findest du eine Schritt-für-Schritt Anleitung.
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={guideUrl} style={styles.button}>
              Guide lesen
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Business Plan Upgrade Empfehlung
// =============================================================================
// Kategorie: Marketing
// Zweck: Zeigt Provider, wie viel sie mit einem bezahlten Plan sparen/verdienen könnten
// WICHTIG: Nur versenden wenn der User qualifiziert ist (genug Buchungen/Umsatz)
// =============================================================================

interface BusinessPlanUpgradeProps {
  firstName?: string;
  potentialSavings?: number;  // Betrag den sie sparen könnten
  potentialEarnings?: number; // Betrag den sie verdienen könnten
  planUrl?: string;
  unsubscribeUrl?: string;
}

export function BusinessPlanUpgrade({
  firstName = 'Partner',
  potentialSavings = 0,
  potentialEarnings = 0,
  planUrl = 'https://frey-one.com/pricing/upgrade',
  unsubscribeUrl = 'https://frey-one.com/unsubscribe?token=',
}: BusinessPlanUpgradeProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Upgrade zu Premium</EmailPreview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoSection}>
            <Img src="https://frey-one.com/logo-icon.png" width="36" height="36" alt="FreyOne" />
          </Section>

          <Heading style={styles.heading}>Mehr verdienen mit Premium 💎</Heading>

          <Text style={styles.text}>Hallo {firstName},</Text>

          <Text style={styles.text}>
            Basierend auf deinen Buchungen in diesem Monat hätte dir ein Premium-Plan Folgendes gebracht:
          </Text>

          {/* Info Box mit Einsparungen/Verdiensten */}
          <Section style={styles.infoBox}>
            {potentialSavings > 0 && (
              <>
                <Text style={styles.infoLabel}>Gebührenersparnis:</Text>
                <Text style={styles.infoValue}>{potentialSavings.toFixed(2)} €</Text>
              </>
            )}
            {potentialEarnings > 0 && (
              <>
                <Text style={styles.infoLabel}>Zusätzliche Verdienste:</Text>
                <Text style={styles.infoValue}>{potentialEarnings.toFixed(2)} €</Text>
              </>
            )}
            {potentialSavings === 0 && potentialEarnings === 0 && (
              <Text style={styles.infoValue}>
                Basierend auf deinen Aktivitäten noch zu sehen
              </Text>
            )}
          </Section>

          <Text style={styles.text}>
            Mit unserem Premium-Plan profitierst du von niedrigeren Gebühren, zusätzlichen Features und prioritärem Support.
          </Text>

          <Section style={styles.buttonSection}>
            <Button href={planUrl} style={styles.button}>
              Plan Details ansehen
            </Button>
          </Section>

          <Text style={styles.unsubscribeText}>
            Zum Abbestellen:{' '}
            <Link href={unsubscribeUrl} style={styles.emailLink}>
              klicke hier
            </Link>
          </Text>

          <EmailFooter variant="marketing" />
        </Container>
      </Body>
    </Html>
  );
}
