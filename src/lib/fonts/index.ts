import { Inter, Montserrat, Open_Sans, Poppins, Roboto } from 'next/font/google';

// Define fonts as separate constants in the module scope
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const fontOptions = {
  inter,
  roboto,
  poppins,
  montserrat,
  openSans,
};

// Example of adding a local font
// const myLocalFont = localFont({
//   src: [
//     {
//       path: '../../public/fonts/my-font.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/my-font-bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-my-local-font',
// });

// ACTIVE FONT CONFIGURATION
// Change this object to switch the active fonts
export const fonts = {
  // Primary font used for most text
  primary: fontOptions.roboto,
  // Secondary font used for headings
  heading: fontOptions.montserrat,
  // Accent font used for special elements
  accent: fontOptions.poppins,
};

// Helper to get all font variables for the className
export function getFontVariables(): string {
  return [fonts.primary.variable, fonts.heading.variable, fonts.accent.variable].join(' ');
}
