import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, description, captchaToken } =
      await req.json();

    // 1️⃣ Verify Google Captcha
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'Captcha secret not configured' },
        { status: 500 },
      );
    }

    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${captchaToken}`,
      },
    );

    const captchaResult = await verifyRes.json();

    if (!captchaResult.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid captcha!' },
        { status: 400 },
      );
    }

    // 2️⃣ Format Indian date & time
    const indiaTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });

    // 3️⃣ Slack Webhook
    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhook) {
      return NextResponse.json(
        { success: false, message: 'Slack webhook missing' },
        { status: 500 },
      );
    }

    // 4️⃣ Slack Block Layout (Two-Column Format)
    const slackBlocks = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '💡 New Project Inquiry',
        },
      },
      { type: 'divider' },

      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*🧑 Name:*\n\n${firstName} ${lastName}\n\n`,
          },
          {
            type: 'mrkdwn',
            text: `*✉ Email:*\n\n${email}\n\n`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*📝 Subject:*\n\n${subject}\n\n`,
          },
          {
            type: 'mrkdwn',
            text: `*🕒 Submitted DateTime (IST):*\n\n${indiaTime}\n\n`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*💬 Message:*\n\n${description}`,
        },
      },
    ];

    // 5️⃣ Send Message to Slack
    await fetch(slackWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blocks: slackBlocks }),
    });

    return NextResponse.json({
      success: true,
      message: 'Your project inquiry has been submitted successfully!',
    });
  } catch (error) {
    console.log('CONTACT API ERROR:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 },
    );
  }
}
