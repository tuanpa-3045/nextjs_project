import dynamic from 'next/dynamic';

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
      <main>{children}</main>
      <DynamicFooter />
    </>
  );
}
