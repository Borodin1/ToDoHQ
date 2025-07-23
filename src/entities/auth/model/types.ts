export interface IAuthState {
  token: string | null;
  user: {
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
}

export interface IAuthenticate {
  type: "login" | "register";
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  identifier?:string
  password?: string;
  confirmPassword?: string;
}

export interface IAuthUpdate {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
}
