import { useAppDispatch } from './useAppDispatch';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/auth-operations';
import ILoginUser from 'types/ILoginUser';

const useLoginUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ email, password }: ILoginUser) => {
    const user = { email, password };
    dispatch(operations.loginUser(user));
    navigate('/contacts');
  };

  return { onSubmitForm };
};

export default useLoginUser;
