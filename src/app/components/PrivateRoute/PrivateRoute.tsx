'use client';
import { useAuthUser } from '@/app/hooks/useAuthUser';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthUser();
  const router = useRouter();

  React.useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, router, loading]);

  if (!user) {
    return null;
  }

  return <div>{children}</div>;
}
