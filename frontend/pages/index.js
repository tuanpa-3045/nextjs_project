import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';
import ScrPicture from '../public/image.jpeg';
import Layout from '../components/layout';

export default function Home() {
  const router = useRouter();

  const click = () => router.push('/about');
  return (
    <Layout>
      <ul className={styles.navbar}>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">about</Link>
        </li>
        <li className={styles.li}>
          <Link href="/todos">Todo</Link>
        </li>
      </ul>
      <h1 className={styles.main}> hello </h1>
      <button onClick={click}>Click here</button>
      <Image src={ScrPicture} alt="picture" width={200} height={200} priority />
    </Layout>
  );
}
