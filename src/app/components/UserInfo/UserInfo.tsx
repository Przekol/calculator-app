'use client';

import React from 'react';
import { getUserData } from '@/app/services/getUserData';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

type UserInfoProps = {
  userId: string;
};

export default function UserInfo({ userId }: UserInfoProps) {
  const [user, setUser] = React.useState<{
    name: string;
    photoURL: string;
  }>({
    name: '',
    photoURL: '',
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(userId);
      if (userData) {
        setUser(prev => ({ ...prev, ...userData }));
      }
    };

    fetchData();
  }, [userId]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Avatar alt={user.name || undefined} src={user.photoURL || undefined} />
      <Typography>{user.name || 'Anonymous'}</Typography>
    </Box>
  );
}
