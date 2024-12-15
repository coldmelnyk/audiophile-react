import { Outlet } from 'react-router';
import { Header, Footer } from './components';

export function App() {
  return (
    <div className="flex flex-col justify-between min-h-lvh">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
