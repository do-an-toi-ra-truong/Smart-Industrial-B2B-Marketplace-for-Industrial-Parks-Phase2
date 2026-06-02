import { createContext, useContext, useState } from 'react';
import { login as apiLogin, logout as apiLogout, getSavedUser } from '../services/authService';

interface AuthContextType {
  user: { email: string; role: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(getSavedUser());

const login = async (email: string, password: string) => {
    const data = await apiLogin(email, password);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify({ email: data.email, role: data.role }));
    setUser({ email: data.email, role: data.role });

    // Redirect theo role
    switch (data.role) {
        case 'SUPER_ADMIN':
            window.location.href = '/saadmin/sa-dashboard';
            break;
        case 'IP_ADMIN':
            window.location.href = '/ipadmin/dashboard';
            break;
        case 'COMPANY_ADMIN':
            window.location.href = '/admin/dashboard';
            break;
        case 'SELLER_STAFF':
            window.location.href = '/admin/seller-staff-orders';
            break;
        case 'BUYER_STAFF':
            window.location.href = '/admin/buyer-staff-orders';
            break;
        default:
            window.location.href = '/';
    }
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