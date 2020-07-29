import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import envVariables from "./Configs/envVariables";
import GlobalStyle from "./GlobalStyle";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Auth0Provider
          domain={envVariables.auth0Domain || ""}
          clientId={envVariables.auth0ClientId || ""}
          redirectUri={window.location.origin}
          audience={envVariables.auth0Audience}
          scope="read:current_user update:current_user_metadata"
        >
          <Route path="*" component={Routes} />
        </Auth0Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
