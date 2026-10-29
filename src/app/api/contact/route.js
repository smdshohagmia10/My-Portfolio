const RESEND_API_URL = "https://api.resend.com/emails";

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message =
    typeof body?.message === "string" ? body.message.trim() : "";

  if (
    !name ||
    name.length > 100 ||
    !isValidEmail(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000
  ) {
    return Response.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact email is not configured.");
    return Response.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  let response;

  try {
    response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: "New portfolio contact message",
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
  } catch (error) {
    console.error("Could not reach Resend to send contact email:", error);
    return Response.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend failed to send contact email:", response.status, details);
    return Response.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
