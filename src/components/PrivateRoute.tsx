import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  roles?: string[];
  redirectTo?: string;
}

export default function PrivateRoute({ children, roles, redirectTo }: PrivateRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectTo || '/saadmin/sa-login'} replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}