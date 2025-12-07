import { NextResponse } from 'next/server';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

interface BookDemoRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  message?: string;
}

function isValidBookDemoRequest(body: unknown): body is BookDemoRequest {
  if (typeof body !== 'object' || body === null) {
    return false;
  }

  const req = body as Partial<BookDemoRequest>;
  return (
    typeof req.name === 'string' && req.name.trim().length > 0 &&
    typeof req.email === 'string' && req.email.trim().length > 0 &&
    typeof req.company === 'string' && req.company.trim().length > 0 &&
    typeof req.phone === 'string' && req.phone.trim().length > 0 &&
    (req.message === undefined || typeof req.message === 'string')
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    // Validate request body
    if (!isValidBookDemoRequest(body)) {
      return NextResponse.json(
        { success: false, error: 'Invalid request body. Required fields: name, email, company, phone' },
        { status: 400 }
      );
    }

    // console.log('Demo booking request:', body)

    // Format the message for Slack
    const message = {
      text: `🎉 New Demo Request!
*Name:* ${body.name}
*Email:* ${body.email}
*Company:* ${body.company}
*Phone:* ${body.phone}
*Message:* ${body.message || 'No message provided'}`
    };

    if (!SLACK_WEBHOOK_URL) {
      throw new Error('SLACK_WEBHOOK_URL is not configured');
    }

    // Send to Slack
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!slackResponse.ok) {
      throw new Error('Failed to send Slack notification');
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing demo booking:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
} 