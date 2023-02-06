import {
  COGNITO_REGION,
  COGNITO_USER_POOL_ID,
  COGNITO_CLIEND_ID,
  COGNITO_OAUTH_DOMAIN,
  COGNITO_OAUTH_SCOPE,
  COGNITO_OAUTH_SIGNIN_PATH,
  COGNITO_OAUTH_SIGNOUT_PATH,
  COGNITO_OAUTH_RESPONSE_TYPE,
} from "@/config";
import { IAwsParams } from "@/features/auth";

const awsExports: IAwsParams = {
  region: COGNITO_REGION,
  userPoolId: COGNITO_USER_POOL_ID,
  userPoolWebClientId: COGNITO_CLIEND_ID,
  oauth: {
    domain: COGNITO_OAUTH_DOMAIN,
    scope: COGNITO_OAUTH_SCOPE.split(","),
    redirectSignIn: COGNITO_OAUTH_SIGNIN_PATH,
    redirectSignOut: COGNITO_OAUTH_SIGNOUT_PATH,
    responseType: COGNITO_OAUTH_RESPONSE_TYPE,
  },
};

export default awsExports;
