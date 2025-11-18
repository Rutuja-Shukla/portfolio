# Email Setup Guide

To receive email notifications when someone submits the contact form, you need to configure SMTP settings.

## Quick Start

### For Gmail (Recommended)
See **[EMAIL_SETUP_GMAIL.md](./EMAIL_SETUP_GMAIL.md)** for detailed Gmail setup instructions.

Or run the setup script:
```bash
cd api
python gmail_setup.py
```

## Environment Variables

Add these environment variables to your Vercel project settings or local `.env` file:

### Required Variables:
- `SMTP_USER` - Your email address (e.g., `yourname@gmail.com`)
- `SMTP_PASSWORD` - Your email password or app password
- `RECIPIENT_EMAIL` - Email address to receive notifications (defaults to SMTP_USER if not set)

### Optional Variables:
- `SMTP_HOST` - SMTP server hostname (default: `smtp.gmail.com`)
- `SMTP_PORT` - SMTP server port (default: `587`)

## Gmail Setup

**See [EMAIL_SETUP_GMAIL.md](./EMAIL_SETUP_GMAIL.md) for detailed instructions.**

Quick steps:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Set environment variables (see above)

## Outlook/Hotmail Setup

```
SMTP_USER=yourname@outlook.com
SMTP_PASSWORD=your-password
RECIPIENT_EMAIL=yourname@outlook.com
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

## Other Email Providers

Check your email provider's SMTP settings and configure accordingly.

## Testing

After setting up, test the contact form. You should receive an email notification when someone submits the form.

## Troubleshooting

- If emails aren't being sent, check the server logs for error messages
- Make sure you're using an App Password for Gmail (not your regular password)
- Verify SMTP settings match your email provider's requirements
- Check that environment variables are set correctly in Vercel
- If Gmail App Passwords aren't available, make sure 2FA is enabled

