import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
    const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID;

    if (!API_KEY || !LIST_ID) {
      console.error('EmailOctopus credentials missing from environment variables.');
      return NextResponse.json(
        { error: 'Newsletter service is temporarily unavailable.' },
        { status: 500 }
      );
    }

    // EmailOctopus API Endpoint
    const url = `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email_address: email,
        // status: "SUBSCRIBED" is default
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle known EmailOctopus errors
      if (data.error && data.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
        return NextResponse.json(
          { error: 'You are already subscribed to our newsletter!' },
          { status: 400 }
        );
      }

      console.error('EmailOctopus API Error:', data);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter Subscription Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
