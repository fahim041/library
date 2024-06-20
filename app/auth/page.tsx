import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function AuthPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-4">
      {session && (
        <p>
          {session?.user?.name}
          <Link href="/api/auth/signout" className="border-2 p-2 ml-4">
            Sign out
          </Link>
        </p>
      )}
      {!session && (
        <Link
          href={`/api/auth/signin?callbackUrl=${
            process.env.NEXTAUTH_URL + '/auth'
          }`}
          className="border-2 p-2"
        >
          Sign in
        </Link>
      )}
    </div>
  );
}
