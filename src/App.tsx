import { Outlet } from 'react-router';
import { Header, Footer } from './components';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
