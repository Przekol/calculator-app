import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const roboto = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

export { theme };
