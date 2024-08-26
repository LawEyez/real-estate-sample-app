import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-vm1kdud1hai5k3u4.us.auth0.com"
     clientId="gEUdMGvVkC4YsVFdsxgZhOUJ8I6gmpCL"
     authorizationParams={{
      redirect_uri: "http://localhost:5173",
      audience: "http://localhost:8000",
      scope: "openid profile email"
     }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
