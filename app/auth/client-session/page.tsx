'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function ClientSessionPage() {
  const { status, data: session } = useSession();

  return (
    <div className="p-4">
      {status === 'loading' && <p>loading...</p>}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin" className="border-2 p-2">
          Sign in
        </Link>
      )}
      {status === 'authenticated' && <div>{session.user?.name}</div>}
    </div>
  );
}
