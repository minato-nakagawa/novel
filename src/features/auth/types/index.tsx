export type IAuthUserAttributes = {
  name: string;
  picture: string;
};

export type IAuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IAuthUserAttributes;
};

export type IAuthContext = {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
} & IAuthState;
