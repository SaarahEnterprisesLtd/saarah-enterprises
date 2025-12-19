import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { service, name, email, message } = body as {
      service?: string;
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    const fromEmail = process.env.CONTACT_EMAIL as string;
    const toEmail = process.env.CONTACT_EMAIL as string;

    if (!fromEmail || !toEmail) {
      return Response.json({ error: "Server email is not configured (CONTACT_EMAIL missing)." }, { status: 500 });
    }

    const serviceLine = service ? `Service: ${service}\n` : "";

    await sgMail.send({
      to: toEmail,
      from: fromEmail,     // must be verified in SendGrid
      replyTo: email,      // customer email
      subject: `New Enquiry: ${service || "General"} - ${name}`,
      text: `${serviceLine}Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Email sending failed." }, { status: 500 });
  }
}
