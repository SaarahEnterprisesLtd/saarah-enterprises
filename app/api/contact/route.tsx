import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL as string;
    const toEmail = process.env.CONTACT_EMAIL as string;

    if (!fromEmail || !toEmail) {
      return Response.json(
        { error: "Server email is not configured." },
        { status: 500 }
      );
    }

    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Enquiry: ${service || "General"} - ${name}`,
      text: `Service: ${service || "General"}
Name: ${name}
Email: ${email}

Message:
${message}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Service:</strong> ${service || "General"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (adminResult.error) {
      throw new Error(adminResult.error.message);
    }

    const autoReplyResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Thanks for contacting us",
      text: `Hi ${name},

We received your enquiry and our team will get back to you shortly.

Your message:
${message}

Best regards,
Your Company Team`,
      html: `
        <h2>Thanks for contacting us</h2>
        <p>Hi ${name},</p>
        <p>We received your enquiry and our team will get back to you shortly.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <br />
        <p>Best regards,</p>
        <p>Your Company Team</p>
      `,
    });

    if (autoReplyResult.error) {
      throw new Error(autoReplyResult.error.message);
    }

    return Response.json(
      {
        success: true,
        adminEmailId: adminResult.data?.id || null,
        autoReplyId: autoReplyResult.data?.id || null,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err);
    return Response.json(
      { error: err?.message || "Email sending failed." },
      { status: 500 }
    );
  }
}