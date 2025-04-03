import { NextResponse } from 'next/server'

const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Demo booking request:', body)
    
    // Format the message for Slack
    const message = {
      text: `🎉 New Demo Request!
*Name:* ${body.name}
*Email:* ${body.email}
*Company:* ${body.company}
*Phone:* ${body.phone}
*Message:* ${body.message || 'No message provided'}`
    }

    // Send to Slack
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })

    if (!slackResponse.ok) {
      throw new Error('Failed to send Slack notification')
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing demo booking:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
} 