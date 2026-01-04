import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CustomerPage from './component/customer/CustomerPage.jsx';
import ShopHubAuthPage from './component/ShopHubAuthPage.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx';
import SellerDashboard from './component/seller/SellerDashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<App />}>
        <Route index element={<div />} />
      </Route>

      <Route path="login" element={<ShopHubAuthPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
