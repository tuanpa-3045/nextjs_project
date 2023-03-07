import { Roboto } from 'next/font/google';
import Image from 'next/image';
const roboto = Roboto({
  weight: ['100', '300', '500', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Header() {
  const srcImage = 'https://picsum.photos/20';
  return (
    <>
      <header className={roboto.className}>header</header>
      <Image src={srcImage} width={20} height={20} alt="picture" />
    </>
  );
}
