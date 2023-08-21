'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function RouteRedirect() {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/dashboard');
  }, [router]);

  return null;
}
