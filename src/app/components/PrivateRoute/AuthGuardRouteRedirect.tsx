'use client';

import React from 'react';
import { useAuthUser } from '@/app/hooks/useAuthUser';
import { useRouter } from 'next/navigation';

export default function AuthGuardRouteRedirect() {
  const { user, loading } = useAuthUser();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [router, user, loading]);

  return null;
}
