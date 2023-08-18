import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { NavItem } from '../../../../types';

interface NavbarMenuItemProps {
  page: NavItem;
}

export function NavbarMenuItem({ page }: NavbarMenuItemProps) {
  return (
    <MenuItem>
      <Link style={{ display: 'flex', gap: 10 }} href={page.href}>
        {page.icon} | {page.title}
      </Link>
    </MenuItem>
  );
}
