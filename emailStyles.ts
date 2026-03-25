// src/lib/email/templates/emailStyles.ts
// Zentrale Styles für alle Email-Templates nach Preview.tsx-Standard
// Diese Datei wird in allen Template-Dateien importiert

export const styles = {
  // LAYOUT STYLES
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

  // TYPOGRAPHY STYLES
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

  // BUTTON & ACTION STYLES
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

  // HINT & FALLBACK STYLES
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

  // INFO BOX STYLES (für Financial & andere Templates)
  infoBox: {
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    padding: '16px',
    margin: '24px 0',
  },
  infoLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
    margin: '8px 0 4px',
  },
  infoValue: {
    fontSize: '14px',
    color: '#1f2937',
    margin: '0 0 8px',
  },

  // WARNING BOX STYLES (für Security-Alerts)
  warningBox: {
    backgroundColor: '#fef2f2',
    borderLeft: '4px solid #ef4444',
    borderRadius: '8px',
    padding: '16px',
    margin: '24px 0',
  },
  warningText: {
    fontSize: '14px',
    lineHeight: '22px',
    color: '#991b1b',
    margin: '0',
  },

  // STATS BOX STYLES (für Cron Reports)
  statsBox: {
    backgroundColor: '#f9fafb',
    padding: '16px',
    margin: '24px 0',
    borderRadius: '8px',
  },
  statLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
    margin: '8px 0 4px',
  },
  statValue: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#4361EE',
    margin: '0 0 16px',
  },

  // UNSUBSCRIBE STYLES (für Marketing-Mails)
  unsubscribeText: {
    color: '#6b7280',
    fontSize: '13px',
    lineHeight: '20px',
    margin: '0 0 32px',
    textAlign: 'center' as const,
  },
} as const;
