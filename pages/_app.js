import '@/styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '500', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} className={roboto.className} />);
}
