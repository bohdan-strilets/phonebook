import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';
import { useAppDispatch } from './useAppDispatch';

const useLogoutUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(operations.logoutUser());
    navigate('/');
  };

  return logout;
};

export default useLogoutUser;
