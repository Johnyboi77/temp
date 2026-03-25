// src/lib/email/templates/templates_core.tsx
// Systemrelevante Auth- und Security-Emails nach Preview.tsx-Standard
// Kategorie: Core - variant="system"

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
// E-Mail-Adresse bestätigen
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet wenn User neue E-Mail-Adresse bestätigen soll (Registrierung oder Adressänderung)
// =============================================================================

interface EmailVerificationProps {
  firstName?: string;
  verificationUrl?: string;
}

export function EmailVerification({
  firstName,
  verificationUrl = 'https://frey-one.com/auth/confirm?token=beispiel-token-123',
}: EmailVerificationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – Bestätige deine E-Mail-Adresse</EmailPreview>

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
            Bestätige deine E-Mail-Adresse
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName}, du` : 'Du'} kannst direkt
            loslegen, wenn du deine E-Mail-Adresse bestätigt hast.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={verificationUrl} style={styles.button}>
              E-Mail-Adresse bestätigen
            </Button>
          </Section>

          {/* SECURITY HINT */}
          <Text style={styles.hint}>
            Falls du diese Anfrage nicht gestellt hast, kannst du
            diese E-Mail ignorieren.
          </Text>

          {/* FALLBACK LINK */}
          <Text style={styles.fallbackLabel}>
            Button funktioniert nicht? Kopiere diesen Link:
          </Text>
          <Text style={styles.fallbackUrl}>
            {verificationUrl}
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Passwort zurücksetzen
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet wenn User Passwort-Reset anfordert
// =============================================================================

interface PasswordResetProps {
  firstName?: string;
  resetUrl?: string;
}

export function PasswordReset({
  firstName,
  resetUrl = 'https://frey-one.com/auth/reset?token=beispiel-token',
}: PasswordResetProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – Passwort zurücksetzen</EmailPreview>

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
            Passwort zurücksetzen
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName}, du` : 'Du'} hast eine Anfrage
            zum Zurücksetzen deines Passworts gestellt.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={resetUrl} style={styles.button}>
              Neues Passwort festlegen
            </Button>
          </Section>

          {/* SECURITY HINT */}
          <Text style={styles.hint}>
            Falls du diese Anfrage nicht gestellt hast, kannst du
            diese E-Mail ignorieren.
          </Text>

          {/* FALLBACK LINK */}
          <Text style={styles.fallbackLabel}>
            Button funktioniert nicht? Kopiere diesen Link:
          </Text>
          <Text style={styles.fallbackUrl}>
            {resetUrl}
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// E-Mail-Adresse ändern
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet wenn User seine E-Mail-Adresse ändern möchte
// =============================================================================

interface EmailChangeProps {
  firstName?: string;
  newEmail?: string;
  confirmUrl?: string;
}

export function EmailChange({
  firstName,
  newEmail = 'neue-email@beispiel.de',
  confirmUrl = 'https://frey-one.com/auth/confirm-email-change?token=beispiel-token',
}: EmailChangeProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – Bestätige deine neue E-Mail-Adresse</EmailPreview>

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
            Bestätige deine neue E-Mail-Adresse
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName},` : ''} wir haben eine
            Anfrage zum Ändern deiner E-Mail-Adresse erhalten.
          </Text>

          {/* INFO BOX */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Neue E-Mail-Adresse:</Text>
            <Text style={styles.infoValue}>{newEmail}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={confirmUrl} style={styles.button}>
              Änderung bestätigen
            </Button>
          </Section>

          {/* SECURITY HINT */}
          <Text style={styles.hint}>
            Falls du diese Änderung nicht angefordert hast,
            ignoriere bitte diese E-Mail und deine aktuelle
            E-Mail-Adresse bleibt unverändert.
          </Text>

          {/* FALLBACK LINK */}
          <Text style={styles.fallbackLabel}>
            Button funktioniert nicht? Kopiere diesen Link:
          </Text>
          <Text style={styles.fallbackUrl}>
            {confirmUrl}
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Willkommensnachricht nach Registrierung
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet wenn Benutzer sich erfolgreich registriert hat
// =============================================================================

interface WelcomeEmailProps {
  firstName?: string;
  appUrl?: string;
}

export function WelcomeEmail({
  firstName,
  appUrl = 'https://frey-one.com',
}: WelcomeEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Willkommen bei FreyOne!</EmailPreview>

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
            Willkommen bei FreyOne!
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName},` : ''} wir freuen uns,
            dass du dich bei uns registriert hast. Du kannst jetzt
            direkt mit der Nutzung von FreyOne beginnen.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={appUrl} style={styles.button}>
              Zu FreyOne
            </Button>
          </Section>

          {/* ADDITIONAL INFO */}
          <Text style={styles.text}>
            Wenn du Fragen hast, kannst du jederzeit unser
            Support-Team kontaktieren.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Passwort wurde geändert (Sicherheitsbestätigung)
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet als Sicherheitsbestätigung nachdem Passwort geändert wurde
// =============================================================================

interface PasswordChangedNotificationProps {
  firstName?: string;
  changedAt?: string;
  supportUrl?: string;
}

export function PasswordChangedNotification({
  firstName,
  changedAt = new Date().toLocaleDateString('de-DE'),
  supportUrl = 'https://frey-one.com/support',
}: PasswordChangedNotificationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – Passwort geändert</EmailPreview>

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
            Passwort wurde geändert
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName},` : ''} dein Passwort
            wurde soeben geändert. Dies ist eine Sicherheitsbestätigung.
          </Text>

          {/* INFO BOX */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Geändert am:</Text>
            <Text style={styles.infoValue}>{changedAt}</Text>
          </Section>

          {/* SECURITY WARNING */}
          <Text style={styles.hint}>
            Falls du diese Änderung nicht vorgenommen hast,{' '}
            <Link href={supportUrl} style={styles.emailLink}>
              kontaktiere sofort unser Support-Team
            </Link>
            .
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// E-Mail-Adresse wurde geändert (Sicherheitsbestätigung)
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet als Sicherheitsbestätigung wenn E-Mail-Adresse geändert wurde
// =============================================================================

interface EmailChangedNotificationProps {
  firstName?: string;
  oldEmail?: string;
  newEmail?: string;
  changedAt?: string;
  supportUrl?: string;
}

export function EmailChangedNotification({
  firstName,
  oldEmail = 'alte-email@beispiel.de',
  newEmail = 'neue-email@beispiel.de',
  changedAt = new Date().toLocaleDateString('de-DE'),
  supportUrl = 'https://frey-one.com/support',
}: EmailChangedNotificationProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – E-Mail-Adresse geändert</EmailPreview>

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
            E-Mail-Adresse wurde geändert
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName},` : ''} deine E-Mail-Adresse
            wurde soeben geändert. Dies ist eine Sicherheitsbestätigung.
          </Text>

          {/* INFO BOX */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Alte E-Mail:</Text>
            <Text style={styles.infoValue}>{oldEmail}</Text>
            <Text style={styles.infoLabel} style={{ marginTop: '12px' }}>
              Neue E-Mail:
            </Text>
            <Text style={styles.infoValue}>{newEmail}</Text>
            <Text style={styles.infoLabel} style={{ marginTop: '12px' }}>
              Geändert am:
            </Text>
            <Text style={styles.infoValue}>{changedAt}</Text>
          </Section>

          {/* SECURITY WARNING */}
          <Text style={styles.hint}>
            Falls du diese Änderung nicht vorgenommen hast,{' '}
            <Link href={supportUrl} style={styles.emailLink}>
              kontaktiere sofort unser Support-Team
            </Link>
            .
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Account temporär gesperrt
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet wenn Account aus Sicherheitsgründen temporär gesperrt wurde
// =============================================================================

interface AccountLockedProps {
  firstName?: string;
  lockedAt?: string;
  supportUrl?: string;
}

export function AccountLocked({
  firstName,
  lockedAt = new Date().toLocaleDateString('de-DE'),
  supportUrl = 'https://frey-one.com/support',
}: AccountLockedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – Account temporär gesperrt</EmailPreview>

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
            Account temporär gesperrt
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName},` : ''} dein Account
            wurde temporär gesperrt, da wir ungewöhnliche
            Aktivitäten festgestellt haben.
          </Text>

          {/* WARNING BOX */}
          <Section style={styles.warningBox}>
            <Text style={styles.warningText}>
              Dies ist eine Sicherheitsmaßnahme zum Schutz deines
              Accounts. Falls du die verdächtige Aktivität nicht
              erkennst,{' '}
              <Link href={supportUrl} style={styles.emailLink}>
                kontaktiere sofort unser Support-Team
              </Link>
              .
            </Text>
          </Section>

          {/* INFO BOX */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Gesperrt am:</Text>
            <Text style={styles.infoValue}>{lockedAt}</Text>
          </Section>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Account reaktiviert
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet wenn gesperrter Account wieder aktiviert wurde
// =============================================================================

interface AccountReactivatedProps {
  firstName?: string;
  appUrl?: string;
}

export function AccountReactivated({
  firstName,
  appUrl = 'https://frey-one.com',
}: AccountReactivatedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – Account reaktiviert</EmailPreview>

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
            Account reaktiviert
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName},` : ''} dein Account
            wurde überprüft und ist jetzt wieder aktiviert. Du kannst
            dich wieder anmelden und FreyOne wie gewohnt nutzen.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={appUrl} style={styles.button}>
              Zu FreyOne
            </Button>
          </Section>

          {/* ADDITIONAL INFO */}
          <Text style={styles.text}>
            Falls du noch Fragen hast, kontaktiere gerne unser
            Support-Team.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Account gebannt / permanent gesperrt
// =============================================================================
// Kategorie: Core
// Zweck: Wird versendet wenn Account permanent gesperrt/gebannt wurde (Missbrauch, AGB-Verstoß)
// =============================================================================

interface AccountBannedProps {
  firstName?: string;
  reason?: string;
  supportUrl?: string;
}

export function AccountBanned({
  firstName,
  reason = 'Verstoß gegen unsere Nutzungsbedingungen',
  supportUrl = 'https://frey-one.com/support/appeal',
}: AccountBannedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>FreyOne – Account wurde gesperrt</EmailPreview>

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
            Account wurde gesperrt
          </Heading>

          {/* BODY TEXT */}
          <Text style={styles.text}>
            {firstName ? `Hallo ${firstName},` : ''} dein Account
            wurde permanent gesperrt.
          </Text>

          {/* WARNING BOX */}
          <Section style={styles.warningBox}>
            <Text style={styles.warningText}>
              Grund der Sperrung: {reason}
            </Text>
          </Section>

          {/* ADDITIONAL INFO */}
          <Text style={styles.text}>
            Falls du dieser Sperrung widersprechen möchtest, kannst du
            Einspruch einlegen.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={supportUrl} style={styles.button}>
              Einspruch einlegen
            </Button>
          </Section>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}
