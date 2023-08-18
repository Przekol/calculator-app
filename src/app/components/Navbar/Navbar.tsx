import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Home, History, Calculate } from '@mui/icons-material';
import NavbarMobileMenu from '@/app/components/Navbar/NavbarMoblieMenu';
import { NavbarDesktopMenu } from '@/app/components/Navbar/NavbarDesktopMenu';
import { NavbarThemeToggle } from '@/app/components/Navbar/NavbarThemeToggle';
import { NavbarUserMenu } from '@/app/components/Navbar/NavbarUserMenu';
import { NavItem } from '../../../../types';

const pages: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <Home />,
  },
  {
    title: 'Results History',
    href: '/results-history',
    icon: <History />,
  },
  {
    title: 'Calculator',
    href: '/calculator',
    icon: <Calculate />,
  },
];

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <NavbarMobileMenu pages={pages} />
          <NavbarDesktopMenu pages={pages} />
          <NavbarThemeToggle />
          <NavbarUserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
