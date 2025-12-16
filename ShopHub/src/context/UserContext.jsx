import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = async () => {
    try {
      const res = await fetch("http://localhost:8888/me", {
        credentials: "include",
      });

      if (!res.ok) throw new Error("Not logged in");

      const data = await res.json();

      setUser({
        name: data.name,  
        role: data.role,
      });
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

const logout = async () => {
  await fetch("http://localhost:8888/logout", {
    method: "GET",
    credentials: "include",
  })
  .then(res=>console.log(res));

  
  setUser(null);
};


  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        logout,
        refreshUser: fetchMe,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
