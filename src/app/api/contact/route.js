import nodemailer from "nodemailer";

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
};

function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = cleanText(body.name);
    const email = cleanText(body.email);
    const subject = cleanText(body.subject);
    const message = cleanText(body.message);

    // Validate required fields.
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please complete all fields." },
        { status: 400 },
      );
    }

    // Limit input sizes.
    if (
      name.length > MAX_LENGTHS.name ||
      email.length > MAX_LENGTHS.email ||
      subject.length > MAX_LENGTHS.subject ||
      message.length > MAX_LENGTHS.message
    ) {
      return Response.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 },
      );
    }

    // Validate email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email) || /[\r\n]/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Ensure SMTP credentials are configured.
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_EMAIL;

    if (!gmailUser || !gmailPassword || !recipient) {
      console.error("Contact form email environment variables are missing.");

      return Response.json(
        { error: "The contact form is temporarily unavailable." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: recipient,
      replyTo: {
        name,
        address: email,
      },
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json(
      { success: true, message: "Your message has been sent!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return Response.json(
      {
        error: "Unable to send your message right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
