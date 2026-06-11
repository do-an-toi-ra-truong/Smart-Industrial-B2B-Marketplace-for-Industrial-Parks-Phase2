import { createContext, useContext, useState } from 'react';
import { login as apiLogin, logout as apiLogout, getSavedUser } from '../services/authService';

interface AuthContextType {
  user: { email: string; role: string; firstName: string; lastName: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(getSavedUser());

const login = async (email: string, password: string) => {
    const data = await apiLogin(email, password);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify({
      email: data.email,
      role: data.role,
      firstName: data.firstName,
      lastName: data.lastName,
    }));
    setUser({ email: data.email, role: data.role, firstName: data.firstName, lastName: data.lastName });
};

  const logout = () => {
    apiLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;