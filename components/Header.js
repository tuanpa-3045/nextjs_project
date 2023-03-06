import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: ['100', '300', '500', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <>
      <header className={roboto.className}>header</header>
    </>
  );
}
