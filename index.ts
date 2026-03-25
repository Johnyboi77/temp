// src/lib/email/templates/index.ts
// Modernisierte Email-Templates nach Preview-Standard
// Alle 28 Emails in 4 Kategorien organisiert

// =============================================================================
// CORE TEMPLATES (Auth & Security)
// =============================================================================
export {
  EmailVerification,
  PasswordReset,
  EmailChange,
  WelcomeEmail,
  PasswordChangedNotification,
  EmailChangedNotification,
  AccountLocked,
  AccountReactivated,
} from './templates_core';

// =============================================================================
// FINANCIAL TEMPLATES (Payments & Bookings)
// =============================================================================
export {
  PaymentConfirmation,
  PayoutInitiated,
  BookingConfirmation,
  BookingCancellation,
  BookingReminder,
  BookingReminderUrgent,
  NewBooking,
  ReviewRequest,
} from './templates_fin';

// =============================================================================
// MARKETING TEMPLATES (Onboarding & Notifications)
// =============================================================================
export {
  ProviderOnboardingStart,
  ProviderProfileIncomplete,
  FirstListingGuide,
  FirstSaleCongrats,
  NoActivityReminder,
  NewReviewReceived,
  ReferralInvite,
  BusinessRegistrationEmail,
} from './templates_mkt';

// =============================================================================
// CRON & REPORT TEMPLATES (Admin Reports)
// =============================================================================
export {
  CronAlertEmail,
  ReportEmail,
  MonthlyReportEmail,
  MonthlyFinancialReportEmail,
} from './templates_cron';

// =============================================================================
// AUTO-REPLY TEMPLATES (Unchanged)
// =============================================================================
export { autoReplyTemplates, emailToTemplate } from './auto_reply';

// =============================================================================
// COMPANY CONFIG (Unchanged)
// =============================================================================
export { COMPANY } from './company.config';