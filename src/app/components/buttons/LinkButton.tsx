import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type LinkButtonProps = {
  href: string;
  title: string;
};

export default function LinkButton({ href, title }: LinkButtonProps) {
  return (
    <Button
      variant={'outlined'}
      sx={{
        borderRadius: 5,
        width: '100%',
        marginTop: 2,
        textTransform: 'none',
      }}
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
}
