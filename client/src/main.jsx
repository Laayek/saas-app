// root
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./context/index.jsx";
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";

// components
import App from "./App.jsx";
import Loading from "./components/loading/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RequiredAuthProvider
      authUrl={import.meta.env.VITE_AUTH_URL}
      displayWhileLoading={<Loading />}
      displayIfLoggedOut={<RedirectToLogin />}
    >
      <ChakraProvider>
        <ContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextProvider>
      </ChakraProvider>
    </RequiredAuthProvider>
  </React.StrictMode>
);
