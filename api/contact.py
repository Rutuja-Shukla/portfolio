from http.server import BaseHTTPRequestHandler
import json
import os
import smtplib
import ssl
import uuid
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        try:
            # ---- Read Request Body ----
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length)

            try:
                data = json.loads(raw.decode("utf-8"))
            except Exception as e:
                raise Exception(f"JSON parsing failed: {e}")

            name = data.get("name")
            email = data.get("email")
            message = data.get("message")

            if not name or not email or not message:
                raise Exception("Missing name, email, or message")

            contact_data = {
                "id": str(uuid.uuid4()),
                "name": name,
                "email": email,
                "message": message,
                "timestamp": datetime.utcnow().isoformat()
            }

            # ---- Send Email ----
            self.send_email(contact_data)

            # ---- Success Response ----
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({
                "success": True,
                "message": "Message sent successfully!",
                "data": contact_data
            }).encode())

        except Exception as e:
            # ---- Error Response ----
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({
                "success": False,
                "error": str(e)
            }).encode())


    def send_email(self, data):
        SMTP_USER = os.getenv("SMTP_USER")
        SMTP_PASS = os.getenv("SMTP_PASSWORD")
        SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
        SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
        RECIPIENT = os.getenv("RECIPIENT_EMAIL", SMTP_USER)

        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = RECIPIENT
        msg["Subject"] = f"New Contact Form Message from {data['name']}"

        body = f"""
Name: {data['name']}
Email: {data['email']}
Message:
{data['message']}

Sent at: {data['timestamp']}
"""
        msg.attach(MIMEText(body, "plain"))

        context = ssl.create_default_context()

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls(context=context)
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, RECIPIENT, msg.as_string())
