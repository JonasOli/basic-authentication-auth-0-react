import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import envVariables from "src/Configs/envVariables";
import api from "src/Services/api";

const AppRoutes: React.FC = () => {
  const { logout, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    async function setAuthorization() {
      const accessToken = await getAccessTokenSilently({
        audience: envVariables.auth0Audience,
      });

      api.defaults.headers["authorization"] = `Bearer ${accessToken}`;
    }

    setAuthorization();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      <Switch>
        <Route
          path="/"
          component={() => (
            <div>
              <h1>Home</h1>
              <button onClick={() => logout()}>Logout</button>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};
export default AppRoutes;
