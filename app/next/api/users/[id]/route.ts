import { NextRequest, NextResponse } from 'next/server';

interface Args {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Args) {
  if (id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json({ id: 1, name: 'user-1 ' });
}
