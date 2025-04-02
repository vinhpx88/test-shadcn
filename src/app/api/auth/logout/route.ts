import { NextResponse } from 'next/server';

export async function POST() {
  // In a real app with sessions or cookies, you would clear them here
  
  return NextResponse.json({ success: true });
}
