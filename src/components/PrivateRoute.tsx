import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  roles?: string[];
}

export default function PrivateRoute({ children, roles }: PrivateRouteProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    if (location.pathname.startsWith('/admin')) {
      return <Navigate to="/admin/login" replace />;
    }
    return <Navigate to="/" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}