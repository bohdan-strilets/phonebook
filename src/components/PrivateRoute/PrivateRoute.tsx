import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';
import { useAppSelector } from 'hooks/useAppSelector';
import IPrivateRoute from 'types/IPrivateRoute';

const PrivateRoute = ({ children, redirectTo = '/' }: IPrivateRoute) => {
  const isLoggedIn = useAppSelector(state => getIsLoggedIn(state));

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
