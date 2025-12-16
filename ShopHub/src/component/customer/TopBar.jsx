import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function TopBar() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();        // 🔥 calls backend /logout
    navigate("/login");    // 🔥 redirect
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="text-sm text-gray-600">
        Welcome, <span className="font-medium">{user.name}</span>
        <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded">
          {user.role}
        </span>
      </div>

      <button
        className="text-sm text-black px-4 py-1.5 transition rounded-lg hover:bg-orange-600 hover:text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default TopBar;
