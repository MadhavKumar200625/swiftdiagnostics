import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const sanitizeText = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const payload = {
      fullName: sanitizeText(body.fullName),
      company: sanitizeText(body.company),
      email: sanitizeText(body.email),
      phone: sanitizeText(body.phone),
      productRequirement: sanitizeText(body.productRequirement),
      message: sanitizeText(body.message),
    };

    const missingRequired = [
      payload.fullName,
      payload.email,
      payload.phone,
      payload.productRequirement,
      payload.message,
    ].some((value) => !value);

    if (missingRequired) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(payload.email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.RECEIVER_EMAIL;
    const companyEmail = process.env.COMPANY_EMAIL || smtpUser || "noreply@localhost";

    if (!smtpHost || !smtpUser || !smtpPassword || !receiverEmail) {
      return NextResponse.json(
        { success: false, message: "Email configuration is not available." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const submissionTimestamp = new Date().toISOString();

    const internalHtml = `
      <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
        <h2 style="color: #0B1F3A; margin-bottom: 16px;">New Website Enquiry — Swift Diagnostics</h2>
        <p><strong>Customer Name:</strong> ${payload.fullName}</p>
        <p><strong>Company:</strong> ${payload.company || "N/A"}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        <p><strong>Product / Requirement:</strong> ${payload.productRequirement}</p>
        <p><strong>Message:</strong> ${payload.message}</p>
        <p><strong>Submission Timestamp:</strong> ${submissionTimestamp}</p>
      </div>
    `;

    const customerHtml = `
      <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.7;">
        <h2 style="color: #0B1F3A;">Thank you for contacting Swift Diagnostics</h2>
        <p>Dear ${payload.fullName},</p>
        <p>Thank you for contacting Swift Diagnostics.</p>
        <p>We have received your enquiry regarding:</p>
        <p><strong>${payload.productRequirement}</strong></p>
        <p>Our team will review your enquiry and get back to you shortly.</p>
        <p>Regards,<br />Swift Diagnostics<br />India&apos;s Trusted Diagnostics Partner</p>
        <p>Phone: +91 7292020389<br />Email: info@swiftdiagnostics.co.in</p>
      </div>
    `;

    await transporter.sendMail({
      from: companyEmail,
      to: receiverEmail,
      subject: "New Website Enquiry — Swift Diagnostics",
      html: internalHtml,
    });

    await transporter.sendMail({
      from: companyEmail,
      to: payload.email,
      subject: "Thank you for contacting Swift Diagnostics",
      html: customerHtml,
    });

    return NextResponse.json({ success: true, message: "Enquiry sent successfully." });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Unable to send the enquiry right now. Please try again later." },
      { status: 500 },
    );
  }
}
