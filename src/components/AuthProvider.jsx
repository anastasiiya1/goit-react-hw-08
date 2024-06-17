import { createContext, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/auth/operations';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const loginUser = async (credentials) => {
    try {
      const data = await dispatch(login(credentials)).unwrap();
      setUser(data.user);
      setToken(data.token);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || 'Login error');
    }
  };

  const logoutUser = async () => {
    try {
      await dispatch(logout()).unwrap();
      setUser(null);
      setToken(null);
      setError(null);
    } catch (error) {
      setError('Logout error');
    }
  };

  const value = {
    user,
    token,
    error,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;