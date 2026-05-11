import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/RootLayout/RootLayout';
import { CashBurnPage } from '../features/cashburn/routes/CashBurnPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CashBurnPage />,
      },
    ],
  },
]);
