# Gmail Email Setup Guide

## Quick Setup (Recommended)

Run the setup script:
```bash
cd api
python gmail_setup.py
```

This will guide you through the setup process.

## Manual Setup

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **"2-Step Verification"**
3. Follow the prompts to enable 2FA
   - You'll need a phone number
   - Google will send a verification code

### Step 2: Generate App Password

**Important:** App Passwords are only available if 2FA is enabled!

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. If you see "The setting you are looking for is not available":
   - Make sure 2FA is enabled (go back to Step 1)
   - Wait a few minutes after enabling 2FA
   - Try refreshing the page
3. Once you can access App Passwords:
   - Select **"Mail"** as the app
   - Select **"Other (Custom name)"** as the device
   - Enter **"Portfolio Contact Form"** as the name
   - Click **"Generate"**
4. Copy the **16-character password** (it will look like: `abcd efgh ijkl mnop`)
   - Remove spaces when using it

### Step 3: Configure Environment Variables

#### For Local Development

Create a `.env` file in the `api` folder:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourname@gmail.com
SMTP_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=yourname@gmail.com
```

#### For Vercel Deployment

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

| Variable | Value | Example |
|----------|-------|---------|
| `SMTP_HOST` | `smtp.gmail.com` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` | `587` |
| `SMTP_USER` | Your Gmail address | `yourname@gmail.com` |
| `SMTP_PASSWORD` | Your App Password | `abcdefghijklmnop` |
| `RECIPIENT_EMAIL` | Email to receive notifications | `yourname@gmail.com` |

5. Click **Save** for each variable
6. **Redeploy** your project for changes to take effect

### Step 4: Test

1. Restart your local server (if testing locally)
2. Submit a test message through the contact form
3. Check your email inbox for the notification

## Troubleshooting

### "App Passwords not available"

**Solution:** 
- Make sure 2FA is enabled
- Wait 5-10 minutes after enabling 2FA
- Try logging out and back into Google
- Use a personal Gmail account (workspace accounts may have restrictions)

### "Authentication failed"

**Solutions:**
- Make sure you're using the App Password (16 characters), not your regular password
- Remove any spaces from the App Password
- Verify the App Password is correct
- Check that 2FA is still enabled

### "Connection timeout"

**Solutions:**
- Check your internet connection
- Verify SMTP settings: `smtp.gmail.com:587`
- Make sure port 587 is not blocked by firewall

### Alternative: Use Resend (Easier, No App Passwords)

If Gmail setup is too complicated, consider using [Resend](https://resend.com):
- Free tier: 3,000 emails/month
- No App Passwords needed
- Just need an API key
- See `EMAIL_SETUP_RESEND.md` for instructions

## Security Notes

- **Never commit `.env` file to git** (it's already in `.gitignore`)
- **App Passwords are safer** than using your regular password
- **Each App Password is unique** - you can revoke it anytime
- **Keep your App Password secret** - treat it like your regular password

## Need Help?

If you're still having issues:
1. Check the server logs for error messages
2. Verify all environment variables are set correctly
3. Test with a different email service (Resend, SendGrid, etc.)
4. Make sure your Gmail account allows "Less secure app access" is NOT needed (App Passwords replace this)

