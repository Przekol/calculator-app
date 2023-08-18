import React from 'react';
import { NavbarMenuItem } from './NavbarMenuItem';
import Box from '@mui/material/Box';
import { NavItem } from '../../../../types';

type NavbarDesktopMenuProps = {
  pages: NavItem[];
};

export function NavbarDesktopMenu({ pages }: NavbarDesktopMenuProps) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
      {pages.map(page => (
        <NavbarMenuItem page={page} key={page.title} />
      ))}
    </Box>
  );
}
