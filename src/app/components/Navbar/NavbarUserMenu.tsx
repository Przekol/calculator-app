'use client';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useAuthActions } from '@/app/hooks/useAuthActions';
import { ExitToApp } from '@mui/icons-material';
import Link from 'next/link';
import { useAuthUser } from '@/app/hooks/useAuthUser';
import { MenuItem, Menu, Box } from '@mui/material';

export function NavbarUserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { signOut } = useAuthActions();
  const { user } = useAuthUser();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user?.displayName || undefined} src={user?.photoURL || undefined} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Link
            style={{
              display: 'flex',
              gap: 10,
            }}
            onClick={handleSignOut}
            href={'/'}
          >
            <ExitToApp /> | Logout
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
