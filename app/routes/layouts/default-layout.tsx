import { Outlet } from 'react-router';

import Footer from './components/footer';
import Header from './components/header';

const DefaultLayout = function () {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh - 60px)] pt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
