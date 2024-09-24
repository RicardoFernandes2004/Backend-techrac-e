import sys
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(name, email):
    sender_email = "rtech7561@gmail.com"
    sender_password = "bpsg pkjm mzgo mujd"  # Senha de aplicativo

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = email
    message["Subject"] = "Bem-vindo ao TechRac-E!"

    body = f"Olá {name},\n\nSua conta foi criada com sucesso!\nObrigado por se cadastrar no TechRac-E!"
    message.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = message.as_string()
        server.sendmail(sender_email, email, text)
        server.quit()
        return True, None  # Retornar sucesso e sem erro
    except Exception as e:
        return False, str(e)  # Retornar falha e mensagem de erro

if __name__ == "__main__":
    data = json.loads(sys.argv[1])
    name = data.get('name')
    email = data.get('email')

    success, error_message = send_email(name, email)

    if success:
        print(json.dumps({"message": "E-mail enviado com sucesso!"}))
    else:
        print(json.dumps({"error": error_message}))


