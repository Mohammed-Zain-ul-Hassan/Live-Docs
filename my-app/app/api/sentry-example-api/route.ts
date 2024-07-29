import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Sentry example API route' });
}
