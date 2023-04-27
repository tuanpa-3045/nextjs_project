import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
// import verifyToken from '../getInitialProps/verifyToken';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <Layout>
      <h1 className={styles.main}> Register </h1>
      <Register />
    </Layout>
  );
}


export default RegisterPage;