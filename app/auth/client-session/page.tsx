'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function ClientSessionPage() {
  const { status, data: session } = useSession();

  return (
    <div className="p-4">
      {status === 'loading' && <p>loading...</p>}
      {status === 'unauthenticated' && (
        <Link
          href={`/api/auth/signin?callbackUrl=${encodeURIComponent(
            process.env.NEXT_PUBLIC_API_URL + '/auth/client-session'
          )}`}
          className="border-2 p-2"
        >
          Sign in
        </Link>
      )}
      {status === 'authenticated' && (
        <div>
          {session.user?.name}
          <Link href="/api/auth/signout" className="border-2 p-2 ml-4">
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
}
