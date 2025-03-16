import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

export default useAuth;

// In the above code snippet, we have created a custom hook useAuth that returns an object with isAuthenticated, login, and logout functions. We can use this hook in any component to manage the authentication state. We can import this hook and use it in the LoginPage component to handle login and logout functionality.