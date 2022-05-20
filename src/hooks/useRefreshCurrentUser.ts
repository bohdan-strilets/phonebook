import { useEffect } from 'react';
import operations from 'redux/auth/auth-operations';
import { getIsRefreshing } from 'redux/auth/auth-selecors';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useRefreshCurrentUser = () => {
  const isRefreshing = useAppSelector(state => getIsRefreshing(state));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return { isRefreshing };
};

export default useRefreshCurrentUser;
