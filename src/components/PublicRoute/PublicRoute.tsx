import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';
import { useAppSelector } from 'hooks/useAppSelector';
import IPublicRoute from 'types/IPublicRoute';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
}: IPublicRoute) => {
  const isLoggedIn = useAppSelector(state => getIsLoggedIn(state));
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
