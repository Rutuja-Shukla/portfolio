"""
Gmail Email Setup Helper
This script helps you set up Gmail for sending contact form notifications.
"""
import os
from pathlib import Path

def create_env_file():
    """Create or update .env file with Gmail configuration"""
    env_path = Path(__file__).parent / '.env'
    
    print("=" * 60)
    print("Gmail Email Setup")
    print("=" * 60)
    print("\nTo use Gmail, you need to:")
    print("1. Enable 2-Factor Authentication (2FA) on your Google account")
    print("2. Generate an App Password")
    print("\nLet's set this up step by step...\n")
    
    # Check if .env exists
    existing_vars = {}
    if env_path.exists():
        print("Found existing .env file. Current values:")
        with open(env_path, 'r') as f:
            for line in f:
                if '=' in line and not line.strip().startswith('#'):
                    key, value = line.strip().split('=', 1)
                    existing_vars[key] = value
                    if 'PASSWORD' in key:
                        print(f"  {key}: {'*' * len(value)}")
                    else:
                        print(f"  {key}: {value}")
        print()
    
    # Get Gmail address
    gmail = input("Enter your Gmail address (e.g., yourname@gmail.com): ").strip()
    if not gmail:
        print("Gmail address is required!")
        return
    
    print("\n" + "=" * 60)
    print("STEP 1: Enable 2-Factor Authentication")
    print("=" * 60)
    print("1. Go to: https://myaccount.google.com/security")
    print("2. Under 'Signing in to Google', click '2-Step Verification'")
    print("3. Follow the prompts to enable 2FA")
    print("\nPress Enter when 2FA is enabled...")
    input()
    
    print("\n" + "=" * 60)
    print("STEP 2: Generate App Password")
    print("=" * 60)
    print("1. Go to: https://myaccount.google.com/apppasswords")
    print("   (If you can't access this, make sure 2FA is enabled)")
    print("2. Select 'Mail' as the app")
    print("3. Select 'Other (Custom name)' as the device")
    print("4. Enter 'Portfolio Contact Form' as the name")
    print("5. Click 'Generate'")
    print("6. Copy the 16-character password (no spaces)")
    print()
    
    app_password = input("Paste your App Password here: ").strip().replace(" ", "")
    if not app_password or len(app_password) != 16:
        print("⚠️  Warning: App Password should be 16 characters. Continuing anyway...")
    
    recipient = input(f"\nEmail to receive notifications (press Enter for {gmail}): ").strip()
    if not recipient:
        recipient = gmail
    
    # Write to .env file
    env_content = f"""# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER={gmail}
SMTP_PASSWORD={app_password}
RECIPIENT_EMAIL={recipient}

# MongoDB Configuration (optional)
# MONGO_URL=your_mongodb_connection_string
# DB_NAME=your_database_name
"""
    
    with open(env_path, 'w') as f:
        f.write(env_content)
    
    print("\n" + "=" * 60)
    print("✅ Configuration saved to .env file!")
    print("=" * 60)
    print(f"\nYour email configuration:")
    print(f"  From: {gmail}")
    print(f"  To: {recipient}")
    print(f"  SMTP: smtp.gmail.com:587")
    print(f"\n⚠️  Important: Add these same variables to your Vercel project:")
    print(f"  1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables")
    print(f"  2. Add each variable (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, RECIPIENT_EMAIL)")
    print(f"\nThe .env file is for local development only.")
    print("\nRestart your server for changes to take effect!")

if __name__ == "__main__":
    try:
        create_env_file()
    except KeyboardInterrupt:
        print("\n\nSetup cancelled.")
    except Exception as e:
        print(f"\n❌ Error: {e}")

