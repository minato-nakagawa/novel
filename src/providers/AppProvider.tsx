import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

// eslint-disable-next-line react/function-component-definition
const ErrorFallback = () => {
  return <div>Ooops, something went wrong</div>;
};

type AppProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line import/prefer-default-export
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
