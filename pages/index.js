import Image from 'next/image';

import ScrPicture from '../public/image.jpeg';
import Layout from '../components/layout.js';
import styles from '@/styles/Home.module.css';
export default function Home() {
  return (
    <Layout>
      <h1 className={styles.main}> hello </h1>
      <Image src={ScrPicture} alt="picture" width={200} height={200} priority />
    </Layout>
  );
}
