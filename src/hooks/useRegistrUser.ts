import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';
import { useAppDispatch } from './useAppDispatch';
import ILoginUser from 'types/ILoginUser';

const useRegistrUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ name, email, password }: ILoginUser) => {
    dispatch(operations.registerUser({ name, email, password }));
    navigate('/contacts');
  };

  return { onSubmitForm };
};

export default useRegistrUser;
