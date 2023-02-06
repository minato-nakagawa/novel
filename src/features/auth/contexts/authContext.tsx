import React from "react";
import { IAuthState, IAuthContext } from "../types";

const initialState: IAuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: {
    name: "",
    picture: "",
  },
};

const stub = (): never => {
  throw new Error("You forgot to wrap your component in <CognitoAuthProvider>.");
};

const initialContext = {
  ...initialState,
  signIn: stub,
  signOut: stub,
};

export const AuthContext = React.createContext<IAuthContext>(initialContext);
