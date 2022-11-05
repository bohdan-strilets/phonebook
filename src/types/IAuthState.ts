export type User = {
  name?: string | null;
  email?: string | null;
  subscription?: string | null;
  avatarURL?: string | null;
};

interface IAuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export default IAuthState;
