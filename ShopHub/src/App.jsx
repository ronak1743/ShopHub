import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./context/UserContext";

function App() {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default App;