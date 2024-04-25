import './style.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <h1>Top info</h1>
        {children}
      </body>
    </html>
  );
}
