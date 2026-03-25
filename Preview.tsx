// diese File wird zum testen der Emails benutzt bevor sie anschließend in die template files geschrieben werden

// Neue Email-Verification Email --> WOrks!

// src/lib/email/templates/Preview.tsx

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

interface PreviewEmailProps {
  firstName?: string;
  verificationUrl?: string;
}

export default function PreviewEmail({
  firstName,
  verificationUrl = 'https://frey-one.com/auth/confirm?token=beispiel-token-123',
}: PreviewEmailProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>
        FreyOne – Bestätige deine E-Mail-Adresse
      </EmailPreview>

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
            loslegen, sobald du bestätigt hast, dass{' '}
            <Link href={verificationUrl} style={styles.emailLink}>
              deine E-Mail-Adresse
            </Link>{' '}
            dir gehört. Klicke dazu einfach auf den Button.
          </Text>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={verificationUrl} style={styles.button}>
              E-Mail-Adresse bestätigen
            </Button>
          </Section>

          {/* SICHERHEITSHINWEIS */}
          <Text style={styles.hint}>
            Falls du diese E-Mail nicht angefordert hast,
            kannst du sie ignorieren.
          </Text>

          {/* FALLBACK */}
          <Text style={styles.fallbackLabel}>
            Button funktioniert nicht? Kopiere diesen Link:
          </Text>
          <Text style={styles.fallbackUrl}>
            {verificationUrl}
          </Text>

          {/* ✅ SYSTEM FOOTER – ersetzt den alten hardcoded Footer */}
          <EmailFooter variant="system" />

        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: '0',
    padding: '0',
  },
  container: {
    maxWidth: '560px',
    margin: '0 auto',
    padding: '48px 40px 40px',
  },
  logoSection: {
    marginBottom: '32px',
  },
  heading: {
    color: '#0f0f0f',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '32px',
    margin: '0 0 20px',
    whiteSpace: 'pre-line' as const,
  },
  text: {
    color: '#404040',
    fontSize: '15px',
    lineHeight: '26px',
    margin: '0 0 28px',
  },
  emailLink: {
    color: '#4361EE',
    textDecoration: 'underline',
  },
  buttonSection: {
    margin: '0 0 28px',
  },
  button: {
    backgroundColor: '#4361EE',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '12px 24px',
    display: 'inline-block',
  },
  hint: {
    color: '#6b7280',
    fontSize: '14px',
    lineHeight: '22px',
    margin: '0 0 32px',
  },
  fallbackLabel: {
    color: '#9ca3af',
    fontSize: '12px',
    margin: '0 0 4px',
  },
  fallbackUrl: {
    color: '#4361EE',
    fontSize: '11px',
    wordBreak: 'break-all' as const,
    margin: '0 0 40px',
  },
} as const;