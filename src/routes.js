import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Main';
import Transaction from './pages/Transaction';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/t/:hash',
    Component: Transaction,
  },
]);

export default router;
