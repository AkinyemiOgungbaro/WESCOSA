import { Inter, Mulish, Nunito } from 'next/font/google';
import './globals.css'; 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

// Forces mobile frames to load a light theme UI environment
export const viewport = {
  colorScheme: 'light', 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} ${mulish.variable} ${nunito.variable} antialiased min-h-screen bg-white`} >
        {children}
      </body>
    </html>
  );
}