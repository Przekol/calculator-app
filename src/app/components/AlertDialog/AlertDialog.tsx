import React from 'react';
import { Alert, AlertProps, Button, Dialog } from '@mui/material';

type AlertDialogProps = {
  open: boolean;
  onClose: () => void;
  message: string;
} & AlertProps;

export default function AlertDialog({ open, onClose, message, ...rest }: AlertDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Alert
        {...rest}
        action={
          <Button color={rest.severity} size="small" onClick={onClose}>
            OK
          </Button>
        }
      >
        {message}
      </Alert>
    </Dialog>
  );
}
