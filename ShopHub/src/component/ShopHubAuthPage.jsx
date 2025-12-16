import { useState } from "react";
import { Mail } from "lucide-react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ShopHubAuthPage = () => {
  const [activeTab, setActiveTab] = useState("signIn");
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">ShopHub</h1>
          <p className="text-gray-500 text-sm mt-1">
            Your marketplace for everything
          </p>
        </div>

        <div className="flex justify-center mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("signIn")}
            className={`flex-1 py-2 rounded-md ${
              activeTab === "signIn"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signUp")}
            className={`flex-1 py-2 rounded-md ${
              activeTab === "signUp"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "signIn" ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default ShopHubAuthPage;

