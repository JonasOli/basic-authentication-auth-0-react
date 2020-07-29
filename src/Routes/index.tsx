import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { LoadingContainer } from "./styles";

const Routes: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress size="7rem" />
      </LoadingContainer>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
