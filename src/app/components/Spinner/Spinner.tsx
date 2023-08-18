import { Backdrop, CircularProgress } from '@mui/material';

export default function Spinner() {
  return (
    <Backdrop open={true}>
      <CircularProgress size={200} color="primary" />
    </Backdrop>
  );
}
