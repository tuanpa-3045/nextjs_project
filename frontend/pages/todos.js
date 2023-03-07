import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Totos() {
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
        {/* <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li> */}
      </ul>
      <h1 className={styles.main}> Todos </h1>
    </Layout>
  );
}
