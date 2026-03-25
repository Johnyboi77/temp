// src/lib/email/templates/templates_support.tsx
// Support & Communication Emails nach Preview.tsx-Standard
// Kategorie: Support - variant="system"

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
// Neue Nachricht erhalten
// =============================================================================
// Kategorie: Support
// Zweck: Benachrichtigung wenn Kunde/Provider eine neue Nachricht erhält
// =============================================================================

interface MessageReceivedProps {
  recipientName: string;
  senderName: string;
  messagePreview?: string;
  messageUrl?: string;
}

export function MessageReceived({
  recipientName,
  senderName,
  messagePreview = 'Neue Nachricht von ' + senderName,
  messageUrl = 'https://frey-one.com/messages',
}: MessageReceivedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Neue Nachricht von {senderName}</EmailPreview>

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
            Neue Nachricht ✉️
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {recipientName},
          </Text>

          {/* MESSAGE INFO */}
          <Text style={styles.text}>
            {senderName} hat dir eine neue Nachricht geschrieben.
          </Text>

          {/* MESSAGE PREVIEW */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Von:</Text>
            <Text style={styles.infoValue}>{senderName}</Text>

            <Text style={styles.infoLabel}>Nachricht:</Text>
            <Text style={styles.infoValue}>{messagePreview}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={messageUrl} style={styles.button}>
              Nachricht ansehen
            </Button>
          </Section>

          {/* INFO */}
          <Text style={styles.hint}>
            Antworte schnell und halte die Kommunikation offen.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}

// =============================================================================
// Support-Anfrage erhalten
// =============================================================================
// Kategorie: Support
// Zweck: Bestätigung dass Support-Anfrage eingegangen ist
// =============================================================================

interface SupportTicketReceivedProps {
  userName: string;
  ticketId: string;
  subject: string;
  description?: string;
  ticketUrl?: string;
  estimatedResponse?: string;
}

export function SupportTicketReceived({
  userName,
  ticketId,
  subject,
  description = 'Bitte warten Sie auf unsere Antwort.',
  ticketUrl = 'https://frey-one.com/support/tickets/',
  estimatedResponse = '24 Stunden',
}: SupportTicketReceivedProps) {
  return (
    <Html lang="de">
      <Head />
      <EmailPreview>Support-Anfrage #{ticketId} erhalten</EmailPreview>

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
            Support-Anfrage erhalten ✓
          </Heading>

          {/* GREETING */}
          <Text style={styles.text}>
            Hallo {userName},
          </Text>

          {/* CONFIRMATION MESSAGE */}
          <Text style={styles.text}>
            Vielen Dank für deine Support-Anfrage. Wir haben sie erhalten und kümmern uns darum!
          </Text>

          {/* TICKET DETAILS */}
          <Section style={styles.infoBox}>
            <Text style={styles.infoLabel}>Ticket-ID:</Text>
            <Text style={styles.infoValue}>{ticketId}</Text>

            <Text style={styles.infoLabel}>Betreff:</Text>
            <Text style={styles.infoValue}>{subject}</Text>

            <Text style={styles.infoLabel}>Beschreibung:</Text>
            <Text style={styles.infoValue}>{description}</Text>

            <Text style={styles.infoLabel}>Geschätzte Antwortzeit:</Text>
            <Text style={styles.infoValue}>{estimatedResponse}</Text>
          </Section>

          {/* CTA BUTTON */}
          <Section style={styles.buttonSection}>
            <Button href={ticketUrl + ticketId} style={styles.button}>
              Ticket-Status ansehen
            </Button>
          </Section>

          {/* INFO */}
          <Text style={styles.hint}>
            Wir antworten normalerweise innerhalb von {estimatedResponse}. Falls du weitere Informationen hast, antworte einfach auf diese E-Mail.
          </Text>

          {/* FOOTER */}
          <EmailFooter variant="system" />
        </Container>
      </Body>
    </Html>
  );
}
