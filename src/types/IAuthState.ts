export type User = {
  name?: string | null;
  email?: string | null;
};

interface IAuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export default IAuthState;
