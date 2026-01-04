import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./context/UserContext";
import SellerDashboard from "./component/seller/SellerDashboard";
import CustomerPage from "./component/customer/CustomerPage";

function App() {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

   if (user.role === "CUSTOMER") {
    return <CustomerPage/>;
  }
  
  return <SellerDashboard />;
}

export default App;