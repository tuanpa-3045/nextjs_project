import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const DynamicHeader = dynamic(() => import('./Header'), {
  loading: () => <p>loading...</p>,
});

const DynamicFooter = dynamic(() => import('./Footer'), {
  loading: () => <p>loading...</p>,
});
export default function Layout({ children }) {
  return (
    <>
      <DynamicHeader />
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
        <li className={styles.li}>
          <Link href="/register">Register</Link>
        </li>
      </ul>
      <main>{children}</main>
      <DynamicFooter />
    </>
  );
}
