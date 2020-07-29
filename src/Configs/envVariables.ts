import dotenv from "dotenv";

dotenv.config();

let cache = null;

export default (() => {
  if (cache) {
    return cache;
  }

  cache = {
    baseUrl: process.env.REACT_APP_BASE_URL,
    auth0Domain: process.env.REACT_APP_AUTH_0_DOMAIN,
    auth0ClientId: process.env.REACT_APP_AUTH_0_CLIENT_ID,
    auth0Audience: process.env.REACT_APP_AUTH_0_AUDIENCE
  };

  return cache;
})();
