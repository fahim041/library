import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'user - 1' },
    { id: 2, name: 'user - 2' },
  ]);
}
