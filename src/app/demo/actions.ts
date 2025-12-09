'use server';

import { z } from 'zod';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// Schema matching the form validation
const demoRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phoneNumber: z.string().optional(),
  message: z.string().optional(),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;

export async function submitDemoRequest(data: DemoRequestData): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate the data
    const validatedData = demoRequestSchema.parse(data);

    // Format the message for Slack
    const message = {
      text: `🎉 New Demo Request!
*Name:* ${validatedData.name}
*Email:* ${validatedData.email}
*Company:* ${validatedData.company || 'Not provided'}
*Phone:* ${validatedData.phoneNumber || 'Not provided'}
*Message:* ${validatedData.message || 'No message provided'}`,
    };

    if (!SLACK_WEBHOOK_URL) {
      console.error('SLACK_WEBHOOK_URL is not configured');
      return { success: false, error: 'Server configuration error' };
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
      console.error('Failed to send Slack notification');
      return { success: false, error: 'Failed to send notification' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error processing demo booking:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Invalid form data' };
    }
    return { success: false, error: 'An unexpected error occurred' };
  }
}
