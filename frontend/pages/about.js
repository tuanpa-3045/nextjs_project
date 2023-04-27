import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <Layout>
      <h1 className={styles.main}> About </h1>
    </Layout>
  );
}
