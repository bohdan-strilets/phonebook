interface User {
  name: string;
  email: string;
  subscription: string;
  avatarURL: string;
}

export interface IAuthRes {
  status: string;
  code: number;
  data: {
    token: string;
    user: User;
  };
}

export interface IGetCurrentUserRes {
  status: string;
  code: number;
  user: User;
}

export interface IUserSignup {
  name?: string;
  email?: string;
  password?: string;
}

export interface IUserSignin {
  email: string;
  password: string;
}
