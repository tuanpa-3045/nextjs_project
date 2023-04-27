import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';
import ScrPicture from '../public/image.jpeg';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();

  const click = () => router.push('/about');
  return (
    <Layout>
      <h1 className={styles.main}> hello </h1>
      <button onClick={click}>Click here</button>
      <Image src={ScrPicture} alt="picture" width={200} height={200} priority />
    </Layout>
  );
}
