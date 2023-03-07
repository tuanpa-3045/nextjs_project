import Image from 'next/image';

export default function Header() {
  const srcImage = 'https://picsum.photos/20';
  return (
    <>
      <header>header</header>
      {/* <Image src={srcImage} width={20} height={20} alt="picture" /> */}
    </>
  );
}
