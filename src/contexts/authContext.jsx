import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState(()=>Cookies.get('token') || "");
  const [role, setRole] = useState();

  const login = (user, token, role) => {
    setUser(user);
    setToken(token);
    setRole(role);
    Cookies.set('token',token,{ expires: 7 })
  };

  const logout = () => {
    setUser("");
    setToken("");
    setRole("");
    Cookies.remove('token')
  };

  const tokenIsValid = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setUser(response.data.user);
      setRole(response.data.user.rol);
    } catch (error) {
      logout();
      console.log(error);
    }
  };

  useEffect(() => {
      if (token !== undefined && token !== "") tokenIsValid();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
