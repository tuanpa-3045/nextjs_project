import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Totos() {
  return (
    <Layout>
      <h1 className={styles.main}> Todos </h1>
    </Layout>
  );
}
