import { NextRequest, NextResponse } from 'next/server';
import schema, { schemaType } from './schema';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body: schemaType = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({ error: 'Email already taken' }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
