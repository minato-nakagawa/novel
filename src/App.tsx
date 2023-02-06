import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProvider } from "@/providers/AppProvider";
import { AuthProvider } from "@/features/auth";
import { AppRoutes } from "@/routes";
import awsExports from "./awsExports";

const overrides = extendTheme({
  styles: {
    global: () => ({
      body: {
        "&::-webkit-scrollbar": {
          width: "5px",
          backgroundColor: `#ACB6BF`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `#14175D`,
        },
      },
    }),
  },
});

const App = () => {
  return (
    <AppProvider>
      <AuthProvider amplifyConfig={awsExports}>
        <ChakraProvider theme={overrides}>
          <AppRoutes />
        </ChakraProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export default App;
