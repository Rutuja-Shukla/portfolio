from http.server import BaseHTTPRequestHandler
import json
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import uuid

class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        try:
            # Read body
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length)
            data = json.loads(body)

            name = data.get("name")
            email = data.get("email")
            message = data.get("message")

            contact_data = {
                "id": str(uuid.uuid4()),
                "name": name,
                "email": email,
                "message": message,
                "timestamp": datetime.utcnow().isoformat()
            }

            # Send email (SMTP)
            self.send_email(contact_data)

            # Response
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({
                "success": True,
                "message": "Message sent successfully!",
                "data": contact_data
            }).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())

    def send_email(self, contact):
        SMTP_USER = os.getenv("SMTP_USER")
        SMTP_PASS = os.getenv("SMTP_PASSWORD")
        SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
        SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
        RECIPIENT = os.getenv("RECIPIENT_EMAIL", SMTP_USER)

        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = RECIPIENT
        msg["Subject"] = f"New Contact Form from {contact['name']}"

        msg.attach(MIMEText(
            f"Name: {contact['name']}\nEmail: {contact['email']}\nMessage:\n{contact['message']}",
            "plain"
        ))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, RECIPIENT, msg.as_string())
