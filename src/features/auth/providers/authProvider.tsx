import { Amplify, Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { IAuthUserAttributes } from "../types";

export type IAwsParams = {
  region: string;
  userPoolId: string;
  userPoolWebClientId: string;
  oauth: {
    domain: string;
    scope: string[];
    redirectSignIn: string;
    redirectSignOut: string;
    responseType: string;
  };
};

type Props = {
  amplifyConfig: IAwsParams;
  children: React.ReactNode;
};

export const AuthProvider = (props: Props) => {
  const { amplifyConfig, children } = props;
  Amplify.configure(amplifyConfig);
  const initialAttrs = useMemo(() => {
    return {
      name: "",
      picture: "",
    };
  }, []);
  const [user, setUser] = useState<IAuthUserAttributes>(initialAttrs);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentAuthenticatedUser = useCallback(async (): Promise<void> => {
    const permittedAttr = ["name", "picture"];
    try {
      const user: CognitoUser = await Auth.currentAuthenticatedUser();
      await user.getUserAttributes((error, attrs) => {
        if (error) {
          setUser(initialAttrs);
          return;
        }
        const filterAttrs =
          attrs
            ?.filter((item) => permittedAttr.includes(item.Name))
            .reduce((acc, item) => {
              const { Name, Value } = item;
              return {
                ...acc,
                [Name]: [Value][0],
              };
            }, initialAttrs) ?? initialAttrs;
        setUser(filterAttrs);
      });
    } catch (error) {
      // console.error(error);
    }
  }, [initialAttrs]);

  const checkAuthenticated = async () => {
    setIsLoading(true);
    try {
      const session = await Auth.currentSession();
      if (session) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      // console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuthenticated();
    currentAuthenticatedUser();
  }, [currentAuthenticatedUser]);

  const signIn = useCallback(async () => {
    setIsLoading(true);
    try {
      Auth.federatedSignIn({ customProvider: "Google" });
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      await Auth.signOut();
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  const value = useMemo(() => {
    return {
      user: user || null,
      isAuthenticated,
      isLoading,
      signIn,
      signOut,
    };
  }, [user, isAuthenticated, isLoading, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
